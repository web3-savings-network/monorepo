import * as React from "react";

import { Web3CardABI } from "@web3-savings-cards/deployments";
import { BigNumber, constants } from "ethers";
import { useAccount, useContractRead } from "wagmi";

interface IsERC721KMintedProps {
  className?: string;
  children: React.ReactNode[];
  contractAddress: string;
}

export const IsERC721KMinted = ({
  children,
  contractAddress,
}: IsERC721KMintedProps) => {
  const account = useAccount();
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: Web3CardABI,
    functionName: "belongsTo",
    args: [account.address],
  });

  if (!txRead.data || !txRead.isSuccess) return children[0];
  if (BigNumber.from(txRead.data).eq(constants.Zero)) {
    return children[0];
  }
  return <>{children[1]}</>;
};

export default IsERC721KMinted;
