import * as React from "react";

import classNames from "classnames";

import { useWeb3CardRead } from "@/hooks/useWeb3CardRead";

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
  const txRead = useWeb3CardRead(contractAddress, "preview", args);

  if (!txRead.data || !txRead.isSuccess) return null;
  const classes = classNames(className, "ERC721KPreview");
  return (
    <img
      alt="Web3 Savings Card"
      className={classes}
      src={String(txRead.data)}
    />
  );
};

export default ERC721KPreview;
