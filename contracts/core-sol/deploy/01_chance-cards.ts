import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, ethers } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const SVGRegistry = await deployments.get("SVGRegistry");
    const SVGLibrary = await deployments.get("SVGLibrary");

    const svgRegistry = await ethers.getContractAt("contracts/svg/SVGRegistry.sol:SVGRegistry", SVGRegistry.address);
    
    const ChanceCardSvgModule = await deploy("ChanceCardSvgModule", {
      contract: "ChanceCardSvgModule",
      from: deployer,
      args: [SVGLibrary.address],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    await svgRegistry.setWidget("0x464f554e44455200000000000000000000000000000000000000000000000000", ChanceCardSvgModule.address);

    const ChanceCardRender = await deploy("ChanceCardRender", {
      contract: "ChanceCardRender",
      from: deployer,
      args: [SVGLibrary.address, SVGRegistry.address],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const ChanceCardTraits = await deploy("ChanceCardTraits", {
      contract: "ChanceCardTraits",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    const contactInformation = {
      name: "ChanceCard",
      description: "ChanceCards - Powered by PoolTogether.",
      image: "",
      externalLink: "https://chance.card",
      sellerFeeBasisPoints: "0",
      feeRecipient: "0x0000000000000000000000000000000000000000",
    };

    const ChanceCardStorage = await deploy("ChanceCardStorage", {
      contract: "ChanceCardStorage",
      from: deployer,
      args: [ChanceCardRender.address, ChanceCardTraits.address, contactInformation],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    

    const ChanceCard = await deploy("ChanceCard", {
      contract: "ChanceCard",
      from: deployer,
      args: ["Chance Card", "CC", ChanceCardStorage.address, '0x32e8D4c9d1B711BC958d0Ce8D14b41F77Bb03a64'],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const ChanceCardMinter = await deploy("ChanceCardMinter", {
      contract: "ChanceCardMinter",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    // const ChanceCardContract = await ethers.getContractAt("ChanceCard", chanceCard.address);
    // await ChanceCardContract.setMinter(ChanceCardMinter.address);
}
