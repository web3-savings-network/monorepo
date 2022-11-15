// @ts-nocheck
import * as React from "react";

import classNames from "classnames";
import { useNetwork, useSwitchNetwork } from "wagmi";

interface SelectBlockchainNetworkProps {
  className?: string;
  network: "ethereum" | "optimism" | "arbitrum" | "polygon";
  disabled?: boolean;
}

export const SelectBlockchainNetwork = ({
  className,
  network = "ethereum",
  disabled = false,
}: SelectBlockchainNetworkProps) => {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const classes = classNames(
    className,
    "SelectBlockchainNetwork",
    "btn btn-white flex items-center",
    {
      "opacity-50": disabled,
    }
  );

  if (network === "ethereum") {
    return (
      <button
        disabled={disabled}
        onClick={() => switchNetwork?.(1)}
        type="button"
        className={classes}
      >
        <img
          className="mr-2 h-5 w-5"
          src={"/img/network/Ethereum.svg"}
          alt="Ethereum"
        />
        <span>Ethereum</span>
      </button>
    );
  }

  if (network === "optimism") {
    return (
      <button
        disabled={disabled}
        onClick={() => switchNetwork?.(10)}
        type="button"
        className={classes}
      >
        <img
          className="mr-2 h-5 w-5"
          src={"/img/network/Optimism.svg"}
          alt="Optimism"
        />
        <span>Optimism</span>
      </button>
    );
  }

  if (network === "arbitrum") {
    return (
      <button
        disabled={disabled}
        onClick={() => switchNetwork?.(10)}
        type="button"
        className={classes}
      >
        <img
          className="mr-2 h-5 w-5"
          src={"/img/network/Arbitrum.svg"}
          alt="Arbitrum"
        />
        <span>Arbitrum</span>
      </button>
    );
  }

  if (network === "polygon") {
    return (
      <button
        disabled={disabled}
        onClick={() => switchNetwork?.(137)}
        type="button"
        className={classes}
      >
        <img
          className="mr-2 h-5 w-5"
          src={"/img/network/Polygon.svg"}
          alt="Polygon"
        />
        <span>Polygon</span>
      </button>
    );
  }

  if (network === "hardhat") {
    return (
      <button
        disabled={disabled}
        onClick={() => switchNetwork?.(31337)}
        type="button"
        className={classes}
      >
        <img
          className="mr-2 h-5 w-5"
          src={"/img/network/Hardhat.svg"}
          alt="Hardhat"
        />
        <span>Hardhat</span>
      </button>
    );
  }

  return (
    <div>
      <span className="">Network Unavailable</span>
    </div>
  );
};

export default SelectBlockchainNetwork;
