import * as React from "react";

import classNames from "classnames";

import { useWeb3CardRead } from "@/hooks/useWeb3CardRead";

interface ERC721KPreviewWithStyleProps {
  className?: string;
  contractAddress: string;
  args: any[];
}

export const ERC721KPreviewWithStyle = ({
  className,
  contractAddress,
  args,
}: ERC721KPreviewWithStyleProps) => {
  const txRead = useWeb3CardRead(contractAddress, "previewWithStyle", args);

  const [imgData, setImgData] = React.useState<string>();
  React.useEffect(() => {
    if (txRead.data) {
      setImgData(String(txRead.data));
    }
  }, [txRead.data]);

  if (!imgData) return null;
  const classes = classNames(className, "ERC721KPreviewWithStyle");
  return <img alt="Web3 Savings Card" className={classes} src={imgData} />;
};

export default ERC721KPreviewWithStyle;
