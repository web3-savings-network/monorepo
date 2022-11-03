import * as React from "react";
import { useContractRead } from "wagmi";
import { DiscoERC721 } from "@district-labs/disco-deployments";
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
    contractInterface: DiscoERC721,
    functionName: "totalSupply",
    args: [],
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  return <span className="">{BigNumber.from(txRead.data).toString()}</span>;
};

export default ERC721TotalSupply;