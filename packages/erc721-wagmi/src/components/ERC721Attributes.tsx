import * as React from "react";
import useERC721Metadata from "./useERC721Metadata";

interface ERC721AttributesProps {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721Attributes = ({
  contractAddress,
  tokenId,
}: ERC721AttributesProps) => {
  const tokenData = useERC721Metadata({
    contractAddress,
    tokenId,
  });

  if (!tokenData) return null;
  return tokenData?.attributes?.map((attribute) => (
    <Attribute name={attribute?.trait_type} value={attribute?.value} />
  ));
};

function Attribute({ name, value }) {
  return (
    <div className="flex justify-between">
      <span className="">{name}</span>
      <span className="">{value}</span>
    </div>
  );
}

export default ERC721Attributes;
