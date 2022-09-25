// @ts-nocheck
import chanceCardABI from '@chance-cards/core-sol/abis/contracts/ChanceCard.sol/ChanceCard.json'
import chanceCardStorageABI from '@chance-cards/core-sol/abis/contracts/ChanceCardStorage.sol/ChanceCardStorage.json'

import ChanceCardMainnet from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';
import ChanceCardTestnet from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';
import ChanceCardLocalhost from '@chance-cards/core-sol/deployments/localhost/ChanceCard.json';


function useNetworkContract(network: string, contract: string) {

    switch (network) {
        case 'mainnet':
            switch (contract) {
                case 'ChanceCard':
                    return ChanceCard
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'testnet':
            switch (contract) {
                case 'ChanceCard':
                    return ChanceCardTestnet
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        case 'localhost':
            switch (contract) {
                case 'ChanceCard':
                    return ChanceCardLocalhost
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            break;
    }

}

export { chanceCardABI, chanceCardStorageABI, useNetworkContract }