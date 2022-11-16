import Web3CardMainnet from '../deployments/localhost/Web3Card.json';
import Web3CardOptimism from '../deployments/optimism/Web3Card.json';
import Web3CardPolygon from '../deployments/polygon/Web3Card.json';
import Web3CardHardhat from '../deployments/localhost/Web3Card.json';

import Web3CardActivatorMainnet from '../deployments/localhost/Web3CardActivator.json';
import Web3CardActivatorOptimism from '../deployments/optimism/Web3CardActivator.json';
import Web3CardActivatorPolygon from '../deployments/polygon/Web3CardActivator.json';
import Web3CardActivatorHardhat from '../deployments/localhost/Web3CardActivator.json';

interface ContractMetadata {
    abi: any;
    address: string;
}

export function useNetworkContractByChainId(network: number, contract: string): ContractMetadata | undefined {

    switch (network) {
        case 1:
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardMainnet.address,
                        abi: Web3CardMainnet.abi,
                    }
                case 'Web3CardActivator':
                    return {
                        address: Web3CardActivatorMainnet.address,
                        abi: Web3CardActivatorMainnet.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 10:
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardOptimism.address,
                        abi: Web3CardOptimism.abi,
                    }
                case 'Web3CardActivator':
                    return {
                        address: Web3CardActivatorOptimism.address,
                        abi: Web3CardActivatorOptimism.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 137:
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardPolygon.address,
                        abi: Web3CardPolygon.abi,
                    }
                case 'Web3CardActivator':
                    return {
                        address: Web3CardActivatorPolygon.address,
                        abi: Web3CardActivatorPolygon.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 31337:
            switch (contract) {
                case 'Web3Card':
                    return {
                        address: Web3CardHardhat.address,
                        abi: Web3CardHardhat.abi,
                    }
                case 'Web3CardActivator':
                    return {
                        address: Web3CardActivatorHardhat.address,
                        abi: Web3CardActivatorHardhat.abi,
                    }
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            return undefined;
    }

}

export default useNetworkContractByChainId