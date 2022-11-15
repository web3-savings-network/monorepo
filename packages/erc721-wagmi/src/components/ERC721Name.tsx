import * as React from "react";
import { useERC721Metadata } from "../hooks/useERC721Metadata";

interface ERC721NameProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721Name = ({ className, contractAddress, tokenId }: ERC721NameProps) => {
  const tokenData = useERC721Metadata({
    contractAddress,
    tokenId,
  });

  if (!tokenData) return null;
  return <h3 className={className}>{tokenData?.name}</h3>;
};

export default ERC721Name;
