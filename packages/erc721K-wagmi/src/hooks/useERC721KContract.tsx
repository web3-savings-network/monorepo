import { useContract } from 'wagmi';
import ERC721K from '../ERC721K.json';

export function useERC721KContract(address: string): any {
  return useContract({
    addressOrName: address,
    contractInterface: ERC721K,
  });
}

export default useERC721KContract;
