import * as React from "react";

import classNames from "classnames";
import Link from "next/link";
import src from "react-select/dist/declarations/src";

import ModalCardActivate from "../ModalCardActivate";

interface SectionDeployedOnComingSoonProps {
  className?: string;
}

export const SectionDeployedOnComingSoon = ({
  className,
}: SectionDeployedOnComingSoonProps) => {
  const containerClassName = classNames(
    className,
    "SectionDeployedOnComingSoon"
  );

  return (
    <section className={containerClassName}>
      <div className={"container mx-auto max-w-screen-xl"}>
        <div className="text-center">
          <span className="text-4xl">💸</span>
          <h3 className="text-2xl font-normal">
            <span className="font-semibold">Web3 Savings Cards</span> can be
            activated anywhere{" "}
            <span className="font-semibold">PoolTogether</span> is deployed.
          </h3>
          <p className="text-sm font-medium">
            Except Avalanche because they rugged PoolTogether users on promised
            rewards.
          </p>
          <hr className="mx-auto mt-5 mb-10 max-w-xs opacity-50" />
        </div>
        <div className="grid grid-cols-12 gap-x-4 gap-y-20 text-center">
          <Network
            className="col-span-6 lg:col-span-4"
            title="Ethereum"
            description="L1"
            imgSrc="/img/network/Ethereum.svg"
          />
          <Network
            enabled={true}
            className="col-span-6 lg:col-span-4"
            title="Optimism"
            description="L2"
            imgSrc="/img/network/Optimism.svg"
          />
          <Network
            enabled={true}
            className="col-span-6 lg:col-span-4"
            title="Polygon"
            description="L1/L2"
            imgSrc="/img/network/Polygon.svg"
          />
        </div>
        <div className="my-10" />
        <p className="text-center text-sm">
          Powered by the{" "}
          <a className="link" target={"blank"} href="https://pooltogether.com/">
            PoolTogether protocol
          </a>{" "}
          and the{" "}
          <a
            className="link"
            target={"blank"}
            href="https://github.com/erc721k"
          >
            ERC721K framework
          </a>
        </p>
      </div>
    </section>
  );
};

const Network = ({
  className,
  title = "Ethereum",
  imgSrc = "/img/network/Ethereum.svg",
  enabled = false,
}: any) => {
  const classes = classNames(className, "Icon");
  const iconStyle = classNames("Icon", "w-16 h-16 mx-auto");
  const titleStyle = classNames("Title", "text-lg font-bold");
  return (
    <div className={classes}>
      <img className={iconStyle} src={imgSrc} alt={title} />
      <div className="my-4" />
      <span className={titleStyle}>{title}</span>
      <div className="mt-6 flex items-center justify-center">
        {enabled ? (
          <a
            target={"_blank"}
            href="https://app.web3savings.network/"
            rel="noreferrer"
          >
            <button className="btn btn-green">Activate</button>
          </a>
        ) : (
          <button className="btn btn-primary" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionDeployedOnComingSoon;
