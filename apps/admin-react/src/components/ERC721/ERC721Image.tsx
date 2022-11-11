import classNames from "classnames";
import * as React from "react";
import { useERC721Metadata } from "../hooks/useERC721Metadata";

interface ERC721ImageProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721Image = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ImageProps) => {
  const tokenData = useERC721Metadata({
    contractAddress,
    tokenId,
  });
  if (!tokenData) return null;
  const classes = classNames(className);
  return <img className={classes} src={tokenData?.image} />;
};

export default ERC721Image;
