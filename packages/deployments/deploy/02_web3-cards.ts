import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hardhat;

  const { deploy } = deployments;
  const { admin, deployer, erc20TWAB, underlyingAsset } = await getNamedAccounts();

  const SVGLibrary = await deployments.get("SVGLibrary");
  const SVGRegistry = await deployments.get("SVGRegistry");
 
  const PoolTogetherV0Render = await deploy("PoolTogetherV0Render", {
    contract: "PoolTogetherV0Render",
    from: deployer,
    args: [SVGLibrary.address, SVGRegistry.address],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const Web3CardTraits = await deploy("Web3CardTraits", {
    contract: "Web3CardTraits",
    from: deployer,
    args: [],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const contactInformation = {
    name: "Web3 Savings Cards",
    description: "Saving Cards for Web3",
    image: "",
    externalLink: "https://web3savings.network",
    sellerFeeBasisPoints: "0",
    feeRecipient: "0x0000000000000000000000000000000000000000",
  };

  const Web3CardDesign = await deploy("Web3CardDesign", {
    contract: "Web3CardDesign",
    from: deployer,
    args: [deployer],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const Web3CardStorage = await deploy("Web3CardStorage", {
    contract: "Web3CardStorage",
    from: deployer,
    args: [PoolTogetherV0Render.address, Web3CardTraits.address, contactInformation, erc20TWAB, Web3CardDesign.address, underlyingAsset ],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const Web3Card = await deploy("Web3Card", {
    contract: "Web3Card",
    from: deployer,
    args: ["Web3 Savings Card", "SAVE", Web3CardStorage.address],
    skipIfAlreadyDeployed: false,
    log: true,
  });
  
  
  const Web3CardActivator = await deploy("Web3CardActivator", {
    contract: "Web3CardActivator",
    from: deployer,
    args: [admin, Web3Card.address, Web3CardDesign.address],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const card = await ethers.getContractAt("Web3Card", Web3Card.address);
  const cardDesign = await ethers.getContractAt("Web3CardDesign", Web3CardDesign.address);
  const cardStorage = await ethers.getContractAt(
    "Web3CardStorage",
    Web3CardStorage.address
    );
    
  await card.grantRoles(Web3CardActivator.address, ethers.utils.parseEther('1'));
  await cardDesign.setERC721KMinterInstance(Web3CardActivator.address);
  await cardDesign.transferOwnership(admin);
  await cardStorage.setERC721KInstance(Web3Card.address);
  
}
