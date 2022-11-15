import classNames from "classnames";
import * as React from "react";
import useERC721ContractMetadata from "../hooks/useERC721ContractMetadata";


interface ERC721ContractURIImageProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ContractURIImage = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ContractURIImageProps) => {
  const contractData = useERC721ContractMetadata({
    contractAddress,
    tokenId,
  });

  if (!contractData) return null;
  const classes = classNames(className);
  return <span className={classes}>{contractData?.name}</span>;
};

export default ERC721ContractURIImage;
