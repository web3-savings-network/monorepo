import ChanceCardMainnet from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';
import ChanceCardTestnet from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';
import ChanceCardLocalhost from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';
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
                case 'ChanceCard':
                    return {
                        address: ChanceCardMainnet.address,
                        abi: ChanceCardMainnet.abi,
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
                case 'ChanceCard':
                    return {
                        address: ChanceCardTestnet.address,
                        abi: ChanceCardTestnet.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'ChanceCard':
                    return {
                        address: ChanceCardLocalhost.address,
                        abi: ChanceCardLocalhost.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            return undefined;
    }

}

export default useNetworkContract