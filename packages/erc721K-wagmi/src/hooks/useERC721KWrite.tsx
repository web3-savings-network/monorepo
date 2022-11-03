import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import ERC721K from '../ERC721K.json';

export function useERC721KWrite(
  address: string,
  method: string,
  args: any[],
  overrides?: any,
  configs?: any
): any {
  const { config } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: ERC721K,
    functionName: method,
    args: args,
    overrides: overrides,
    ...configs,
  });

  return useContractWrite(config);
}

export default useERC721KWrite;
