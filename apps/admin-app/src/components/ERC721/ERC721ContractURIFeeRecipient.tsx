import classNames from "classnames";
import * as React from "react";
// import Address from "../Wallet/Address";
import useERC721ContractMetadata from "./useERC721ContractMetadata";

interface ERC721ContractURIFeeRecipientProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ContractURIFeeRecipient = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ContractURIFeeRecipientProps) => {
  const contractData = useERC721ContractMetadata({
    contractAddress,
    tokenId,
  });

  if (!contractData) return null;
  const classes = classNames(className);
  return (
    <a href={contractData?.externalLink} className={classes}>
      {contractData?.feeRecipient}
      {/* <Address address={contractData?.feeRecipient} truncate /> */}
    </a>
  );
};

export default ERC721ContractURIFeeRecipient;
