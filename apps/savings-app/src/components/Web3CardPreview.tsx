import * as React from "react";
import classNames from "classnames";
import { useNetworkContract } from "@chance-cards/deployments";
import { ERC721KPreview } from "./ERC721K/ERC721KPreview";
import { useAccount } from "wagmi";

interface Web3CardPreviewProps {
  className?: string;
}

export const Web3CardPreview = ({ className }: Web3CardPreviewProps) => {
  const contract = useNetworkContract("localhost", "Web3Card");
  const account = useAccount();
  const containerClassName = classNames(className, "Web3CardPreview");
  return (
    <div className={containerClassName}>
      <ERC721KPreview
        className="rounded-xl w-full"
        contractAddress={contract?.address || ""}
        args={[account.address]}
      />
    </div>
  );
};

export default Web3CardPreview;
