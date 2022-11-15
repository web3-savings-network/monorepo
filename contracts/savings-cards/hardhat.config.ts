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

const optimizerEnabled = !process.env.OPTIMIZER_DISABLED;

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
      10: '0xF9646b896b600D6faB5A4B1e35b4ab9E5E78a566',
    },
    erc20TWAB: {
      default: constants .AddressZero,
      1: '0xdd4d117723C257CEe402285D3aCF218E9A8236E1', // PoolTogether USDC Ticket
      10: '0x62BB4fc73094c83B5e952C2180B23fA7054954c4', // PoolTogether USDC Ticket
    },
  },
  networks,
  solidity: {
    version: '0.8.15',
    settings: {
      // viaIR: true,
      optimizer: {
        enabled: optimizerEnabled,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
};

export default config;
