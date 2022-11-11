import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hardhat;

  const { deploy } = deployments;
  const { admin, deployer, erc20TWAB } = await getNamedAccounts();

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

  const Web3CardStorage = await deploy("Web3CardStorage", {
    contract: "Web3CardStorage",
    from: deployer,
    args: [PoolTogetherV0Render.address, Web3CardTraits.address, contactInformation],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const Web3Card = await deploy("Web3Card", {
    contract: "Web3Card",
    from: deployer,
    args: ["Web3 Savings Card", "SAVE", Web3CardStorage.address, admin],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const cardStorage = await ethers.getContractAt(
    "contracts/Web3CardStorage.sol:Web3CardStorage",
    Web3CardStorage.address
  );
  await cardStorage.setERC20TWABInstance(erc20TWAB);
  await cardStorage.setERC721KInstance(Web3Card.address);
}
