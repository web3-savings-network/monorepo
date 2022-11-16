// @ts-nocheck
import 'dotenv/config'
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-dependency-compiler';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';
import networks from './hardhat.network';
import { constants } from 'ethers';

const config: HardhatUserConfig = {
  abiExporter: {
    path: './abis',
    runOnCompile: true,
    clear: true,
    flat: false,
    except: ['./abis/ERC20.sol', './abis/ERC721.sol'],
  },
  // @ts-ignore
  anvil: {
    url: 'http://127.0.0.1:8545/',
    launch: false, // if set to `true`, it will spawn a new instance if the plugin is initialized, if set to `false` it expects an already running anvil instance
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  external: {
    contracts: [
      {
        artifacts: [
          '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol:IERC721Enumerable',
          "@erc721k/core-sol/contracts/ERC721K.sol:ERC721K",
          "@erc721k/periphery-sol/contracts/svg/SVGColor.sol:SVGColor",
          "@erc721k/periphery-sol/contracts/svg/SVGRegistry.sol:SVGRegistry",
          "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol:SVGLibrary",
          "@erc721k/core-sol/contracts/Solbase/tokens/ERC721/ERC721.sol:ERC721",
        ]
      },
    ],
  },
  dependencyCompiler: {
    paths: [],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    maxMethodDiff: 10,
  },
  mocha: {
    timeout: 30000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    admin: {
      default: '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31',
      10: '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31',
      137: '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31',
      31337: '0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31',
    },
    // PoolTogether USDC Ticket
    erc20TWAB: {
      default: '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076',
      1: '0xdd4d117723C257CEe402285D3aCF218E9A8236E1',
      10: '0x62BB4fc73094c83B5e952C2180B23fA7054954c4',
      137: '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076',
      // 31337: '0x62BB4fc73094c83B5e952C2180B23fA7054954c4', // Optimism
    },
    // PoolTogether USDC Ticket Underlying Asset
    underlyingAsset: {
      default: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      10: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      // 31337: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // Optimism
    },
  },
  networks,
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  dependencyCompiler: {
    paths: [
          '@web3-savings-cards/core-sol/contracts/Web3Card.sol',
          '@web3-savings-cards/core-sol/contracts/Web3Assets.sol',
          '@web3-savings-cards/core-sol/contracts/Web3CardActivator.sol',
          '@web3-savings-cards/core-sol/contracts/Web3CardStorage.sol',
          '@web3-savings-cards/core-sol/contracts/Web3CardTraits.sol',
          '@web3-savings-cards/core-sol/contracts/rendering/PoolTogetherV0Render.sol',
          '@erc721k/core-sol/contracts/ERC721K.sol',
          '@erc721k/core-sol/contracts/ERC721Storage.sol',
          '@erc721k/periphery-sol/contracts/svg/svg.sol',
          '@erc721k/periphery-sol/contracts/svg/svgUtils.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGColor.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol',
          '@erc721k/periphery-sol/contracts/svg/SVGRegistry.sol',
          '@turbo-eth/solbase-sol/src/auth/OwnedThreeStep.sol',
      ],
  },
};

export default config;
