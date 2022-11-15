import { Web3CardABI } from "@web3-savings-cards/deployments";
import { useContractRead } from "wagmi";

export function useWeb3CardRead(
  contractAddress: string,
  method: string,
  args: any[]
): any {
  return useContractRead({
    addressOrName: contractAddress,
    contractInterface: Web3CardABI,
    functionName: method,
    args,
  });
}

export default useWeb3CardRead;
