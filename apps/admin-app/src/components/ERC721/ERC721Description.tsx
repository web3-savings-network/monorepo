import * as React from "react";
import { useERC721Metadata } from "../hooks/useERC721Metadata";

interface ERC721DescriptionProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721Description = ({
  contractAddress,
  tokenId,
}: ERC721DescriptionProps) => {
  const tokenData = useERC721Metadata({
    contractAddress,
    tokenId,
  });

  if (!tokenData) return null;
  return <p className="">{tokenData?.description}</p>;
};

export default ERC721Description;
