import Web3CardABI from '../abis/@web3-savings-cards/core-sol/contracts/Web3Card.sol/Web3Card.json'
import Web3CardStorageABI from '../abis/@web3-savings-cards/core-sol/contracts/Web3CardStorage.sol/Web3CardStorage.json'

import TwabRewardsABI from './abi/TwabRewards.json'
import TWABDelegatorABI from './abi/TWABDelegator.json'
import PrizeTierHistoryABI from './abi/PrizeTierHistory.json'
import {useNetworkContract} from './useNetworkContract'
import {useNetworkContractByChainId} from './useNetworkContractByChainId'

export { Web3CardABI, Web3CardStorageABI, TwabRewardsABI, TWABDelegatorABI, PrizeTierHistoryABI, useNetworkContract, useNetworkContractByChainId }