import * as React from "react";

import { useNetworkContractByChainId } from "@web3-savings-cards/deployments";
import classNames from "classnames";
import { constants } from "ethers";
import { useAccount, useNetwork } from "wagmi";

import { ERC721KPreviewWithStyle } from "./ERC721K/ERC721KPreviewWithStyle";

interface Web3CardPreviewProps {
  className?: string;
  color: number | string;
  emoji: number | string;
}

export const Web3CardPreview = ({
  className,
  color,
  emoji,
}: Web3CardPreviewProps) => {
  const { chain } = useNetwork();
  const contract = useNetworkContractByChainId(chain?.id, "Web3Card");
  const account = useAccount();
  const classes = classNames(className, "Web3CardPreview");
  return (
    <div className={classes}>
      <ERC721KPreviewWithStyle
        className={classes}
        contractAddress={contract?.address || ""}
        args={[account.address || constants.AddressZero, color, emoji]}
      />
    </div>
  );
};

export default Web3CardPreview;
