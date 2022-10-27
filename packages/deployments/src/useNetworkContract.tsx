import Web3CardMainnet from '@chance-cards/core-sol/deployments/localhost/Web3Card.json';
import Web3CardTestnet from '@chance-cards/core-sol/deployments/localhost/Web3Card.json';
import Web3CardLocalhost from '@chance-cards/core-sol/deployments/localhost/Web3Card.json';
import TWABDelegatorABI from './abi/TWABDelegator.json';
import PoolTogetherContractAddresses from './PoolTogetherContractAddresses'

interface ContractMetadata {
    abi: any;
    address: string;
}

export function useNetworkContract(network: string, contract: string): ContractMetadata | undefined {

    switch (network) {
        case 'mainnet':
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardMainnet.address,
                        abi: Web3CardMainnet.abi,
                    }
                case 'TWABDelegator':
                    return {
                        address: PoolTogetherContractAddresses[1].TWABDelegator,
                        abi: TWABDelegatorABI,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'testnet':
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardTestnet.address,
                        abi: Web3CardTestnet.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardLocalhost.address,
                        abi: Web3CardLocalhost.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            return undefined;
    }

}

export default useNetworkContract