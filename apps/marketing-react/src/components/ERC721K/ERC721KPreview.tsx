import * as React from "react";

import { useContractRead } from "wagmi";

import ERC721K_ABI from "./ERC721K.json";

interface ERC721KPreviewProps {
  className?: string;
  contractAddress: string;
  args: any[];
}

export const ERC721KPreview = ({
  contractAddress,
  args,
}: ERC721KPreviewProps) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ERC721K_ABI,
    functionName: "preview",
    args,
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  return <img src={String(txRead.data)} />;
};

export default ERC721KPreview;
