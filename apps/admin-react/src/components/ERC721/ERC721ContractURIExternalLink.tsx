import classNames from "classnames";
import * as React from "react";
import useERC721ContractMetadata from "./useERC721ContractMetadata";

interface ERC721ContractURIExternalLinkProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ContractURIExternalLink = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ContractURIExternalLinkProps) => {
  const contractData = useERC721ContractMetadata({
    contractAddress,
    tokenId,
  });

  if (!contractData) return null;
  const classes = classNames(className);
  return (
    <a href={contractData?.externalLink} className={classes}>
      {contractData?.externalLink}
    </a>
  );
};

export default ERC721ContractURIExternalLink;
