import * as React from "react";
import classNames from "classnames";
import ModalCardActivate from "../ModalCardActivate";
import src from "react-select/dist/declarations/src";

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
          <h3 className="font-normal text-2xl">
            <span className="font-semibold">Web3 Savings Cards</span> can be
            activated anywhere{" "}
            <span className="font-semibold">PoolTogether</span> is deployed.
          </h3>
          <p className="text-sm font-medium">
            Except Avalanche because they rugged PoolTogether users on promised
            rewards.
          </p>
          <hr className="max-w-xs mx-auto mt-5 mb-10 opacity-50" />
        </div>
        <div className="grid grid-cols-12 gap-x-4 gap-y-20 text-center">
          <Network
            className="col-span-6 lg:col-span-4"
            title="Ethereum"
            description="L1"
            imgSrc="/img/network/Ethereum.svg"
          />
          <Network
            className="col-span-6 lg:col-span-4"
            title="Optimism"
            description="L2"
            imgSrc="/img/network/Optimism.svg"
          />
          <Network
            className="col-span-6 lg:col-span-4"
            title="Polygon"
            description="L1/L2"
            imgSrc="/img/network/Polygon.svg"
          />
        </div>
        <div className="my-10" />
        <p className="text-sm text-center">
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
  imgSrc = "/img/network/ethereum.svg",
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
        <button className="btn btn-light">Coming Soon</button>
      </div>
    </div>
  );
};

export default SectionDeployedOnComingSoon;
