import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hardhat;

  const { deploy } = deployments;
  const { deployer, erc20TWAB } = await getNamedAccounts();

  const SVGRegistry = await deployments.get("SVGRegistry");
  const SVGLibrary = await deployments.get("SVGLibrary");

  const svgRegistry = await ethers.getContractAt(
    "contracts/svg/SVGRegistry.sol:SVGRegistry",
    SVGRegistry.address
  );

  const Web3CardSvgModule = await deploy("Web3CardSvgModule", {
    contract: "Web3CardSvgModule",
    from: deployer,
    args: [SVGLibrary.address],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  await svgRegistry.setWidget(
    "0x464f554e44455200000000000000000000000000000000000000000000000000",
    Web3CardSvgModule.address
  );

  const Web3CardRender = await deploy("Web3CardRender", {
    contract: "Web3CardRender",
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
    name: "Web3Card",
    description: "Web3Cards - Powered by PoolTogether.",
    image: "",
    externalLink: "https://chance.card",
    sellerFeeBasisPoints: "0",
    feeRecipient: "0x0000000000000000000000000000000000000000",
  };

  const Web3CardStorage = await deploy("Web3CardStorage", {
    contract: "Web3CardStorage",
    from: deployer,
    args: [Web3CardRender.address, Web3CardTraits.address, contactInformation],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const Web3Card = await deploy("Web3Card", {
    contract: "Web3Card",
    from: deployer,
    args: ["Chance Card", "CC", Web3CardStorage.address],
    skipIfAlreadyDeployed: false,
    log: true,
  });

  const ccStorage = await ethers.getContractAt(
    "contracts/Web3CardStorage.sol:Web3CardStorage",
    Web3CardStorage.address
  );
  await ccStorage.setERC20TWABInstance(erc20TWAB);
  await ccStorage.setERC721KInstance(Web3Card.address);

  // const Web3CardMinter = await deploy("Web3CardMinter", {
  //   contract: "Web3CardMinter",
  //   from: deployer,
  //   args: [],
  //   skipIfAlreadyDeployed: false,
  //   log: true,
  // });

  // const Web3CardContract = await ethers.getContractAt("Web3Card", Web3Card.address);
  // await Web3CardContract.setMinter(Web3CardMinter.address);
}
