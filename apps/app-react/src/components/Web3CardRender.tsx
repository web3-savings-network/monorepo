// @ts-nocheck
import * as React from "react";

import { ERC721ImageBase64 } from "@turbo-eth/erc721-wagmi";
import { useNetworkContractByChainId } from "@web3-savings-cards/deployments";
import classNames from "classnames";
import { constants } from "ethers";
import { useAccount, useNetwork } from "wagmi";

import { useWeb3CardRead } from "@/hooks/useWeb3CardRead";

interface Web3CardRenderProps {
  className?: string;
}

export const Web3CardRender = ({ className }: Web3CardRenderProps) => {
  const { chain } = useNetwork();
  const contract = useNetworkContractByChainId(chain?.id, "Web3Card");
  const account = useAccount();
  const classes = classNames(className, "Web3CardRender");

  const UPDATE = ({ x, y }) => {
    const CARD = document.querySelector(".Web3CardRender");
    if (CARD && CARD.getBoundingClientRect) {
      // Calculate the range between the center and the pointer position.
      const BOUNDS = CARD.getBoundingClientRect();
      const posX = x - BOUNDS.x;
      const posY = y - BOUNDS.y;
      const ratioX = posX / BOUNDS.width;
      const ratioY = posY / BOUNDS.height;
      CARD.style.setProperty("--ratio-x", ratioX);
      CARD.style.setProperty("--ratio-y", ratioY);
    }
    // console.info({ posX, posY })
  };
  React.useEffect(() => {
    document.body.addEventListener("pointermove", UPDATE);
  }, []);

  const txRead = useWeb3CardRead(contract.address, "belongsTo", [
    account.address,
  ]);

  if (!txRead.data || !txRead.isSuccess) return null;

  if (txRead.data.eq(constants.Zero)) {
    return <div className={classes}>No Web3 Savings Card</div>;
  }

  return (
    <div className={classes}>
      <ERC721ImageBase64
        className={classes}
        contractAddress={contract.address}
        tokenId={txRead.data}
      />
    </div>
  );
};

export default Web3CardRender;
