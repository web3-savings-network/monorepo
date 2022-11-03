import { useContractRead } from 'wagmi';
import ERC721K from '../ERC721K.json';

export function useERC721KRead(
  address: string,
  method: string,
  args: any[]
): any {
    useContractRead({
      addressOrName: address,
      contractInterface: ERC721K,
      functionName: method,
      args: args,
    })
}

export default useERC721KRead;
