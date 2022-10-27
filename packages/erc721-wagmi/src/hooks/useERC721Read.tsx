import { useContractRead, erc721ABI } from 'wagmi';

export function useERC721Read(
  address: string,
  method: string,
  args: any[]
): any {
    useContractRead({
      addressOrName: address,
      contractInterface: erc721ABI,
      functionName: method,
      args: args,
    })
}

export default useERC721Read;
