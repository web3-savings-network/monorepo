import classNames from "classnames";
import * as React from "react";
import useERC721ContractMetadata from "./useERC721ContractMetadata";

interface ERC721ContractURIDescriptionProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ContractURIDescription = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ContractURIDescriptionProps) => {
  const contractData = useERC721ContractMetadata({
    contractAddress,
    tokenId,
  });

  console.log(contractData, "contractData");

  if (!contractData) return null;
  const classes = classNames(className);
  return <span className={classes}>{contractData?.description}</span>;
};

export default ERC721ContractURIDescription;
