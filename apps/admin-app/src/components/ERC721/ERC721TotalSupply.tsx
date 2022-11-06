import * as React from "react";
import { useContractRead } from "wagmi";
import { erc721ABI } from "wagmi";
import { BigNumber } from "ethers";

interface ERC721TotalSupplyProps {
  className?: string;
  contractAddress: string;
}

export const ERC721TotalSupply = ({
  contractAddress,
}: ERC721TotalSupplyProps) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: erc721ABI,
    functionName: "totalSupply",
    args: [],
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  return <span className="">{BigNumber.from(txRead.data).toString()}</span>;
};

export default ERC721TotalSupply;
