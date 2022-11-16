import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import ASSETS_NETWORK from '../assets/networks'

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
    // const { deployments, getNamedAccounts, ethers } = hardhat;

    // const { deploy } = deployments;
    // const { deployer } = await getNamedAccounts();

    // const SVGRegistry = await deployments.get("SVGRegistry");
  
    // const svgRegistry = await ethers.getContractAt(
    //   "SVGRegistry",
    //   SVGRegistry.address
    // );
      
    // const Web3Assets = await deploy("Web3Assets", {
    //   contract: "Web3Assets",
    //   from: deployer,
    //   args: [deployer],
    //   skipIfAlreadyDeployed: true,
    //   log: true,
    // });
  
    // const tx = await svgRegistry.setWidget(
    //   utils.formatBytes32String("WEB3_ASSETS"),
    //   Web3Assets.address, {
    //     gasPrice: '45000000000',
    //   }
    // );

    // console.log(tx)
    // tx.wait().then((receipt) => {
    //     console.log(receipt)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const assets = await ethers.getContractAt(
    //     "Web3Assets",
    //     Web3Assets.address
    // );
    
    // // Brands
    // await assets.set(
    //     utils.formatBytes32String("LOGO_POOL"),
    //     ASSETS_NETWORK.logoPOOL
    // );

    // // Tokens
    // await assets.set(
    //     utils.formatBytes32String("TOKEN_USDC"),
    //     ASSETS_NETWORK.tokenUSDC
    // );
    // await assets.set(
    //     utils.formatBytes32String("TOKEN_POOL"),
    //     ASSETS_NETWORK.tokenPOOL
    // );
    // await assets.set(
    //     utils.formatBytes32String("TOKEN_POOL_INVERSE"),
    //     ASSETS_NETWORK.tokenPOOLInverse
    // );

    // // Networks
    // await assets.set(
    //     utils.formatBytes32String("ICON_NETWORK_TEST"),
    //     ASSETS_NETWORK.hardhat
    // );
    // await assets.set(
    //     utils.formatBytes32String("ICON_NETWORK_ETHEREUM"),
    //     ASSETS_NETWORK.ethereum
    // );
    // await assets.set(
    //     utils.formatBytes32String("ICON_NETWORK_OPTIMISM"),
    //     ASSETS_NETWORK.optimism
    // );
    // await assets.set(
    //     utils.formatBytes32String("ICON_NETWORK_ARBITRUM"),
    //     ASSETS_NETWORK.aribtrum
    // );
    // await assets.set(
    //     utils.formatBytes32String("ICON_NETWORK_POLYGON"),
    //     ASSETS_NETWORK.polygon
    // );
}
