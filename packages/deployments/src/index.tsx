
import PixelPooly_Localhost from '../deployments/localhost/PixelPooly.json';
import PixelPoolyAssets_Localhost from '../deployments/localhost/PixelPoolyAssets.json';
import PixelPoolyRender_Localhost from '../deployments/localhost/PixelPoolyRender.json';
import PixelPoolyStorage_Localhost from '../deployments/localhost/PixelPoolyStorage.json';
import PixelPoolyTraits_Localhost from '../deployments/localhost/PixelPoolyTraits.json';

function useNetworkContract(network: string, contract: string) {

    switch (network) {
        case 'localhost':
            switch (contract) {
                case 'PixelPooly':
                    return PixelPooly_Localhost
                case 'PixelPoolyAssets':
                    return PixelPoolyAssets_Localhost
                case 'PixelPoolyRender':
                    return PixelPoolyRender_Localhost
                case 'PixelPoolyStorage':
                    return PixelPoolyStorage_Localhost
                case 'PixelPoolyTraits':
                    return PixelPoolyTraits_Localhost
                default:
                    throw new Error(`Unknown contract ${contract}`);
            }
        default:
            break;
    }

}

export { useNetworkContract }