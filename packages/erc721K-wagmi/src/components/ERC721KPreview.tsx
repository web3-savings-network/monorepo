import classNames from "classnames";
import * as React from "react";
import { useContractRead } from "wagmi";
import ERC721K_ABI from "./ERC721K.json";

interface ERC721KPreviewProps {
  className?: string;
  contractAddress: string;
  args: any[];
}

export const ERC721KPreview = ({
  className,
  contractAddress,
  args,
}: ERC721KPreviewProps) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ERC721K_ABI,
    functionName: "preview",
    args: args,
  });

  if (!txRead.data || !txRead.isSuccess) return null;
  const classes = classNames(className, "ERC721KPreview");
  return <img className={classes} src={String(txRead.data)} />;
};

export default ERC721KPreview;
