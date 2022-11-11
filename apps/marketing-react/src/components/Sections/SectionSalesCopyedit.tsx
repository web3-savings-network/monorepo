import * as React from "react";

import { ModalInjectIFrame } from "@web3-savings-cards/framework-react";
import classNames from "classnames";

interface SectionSalesCopyeditProps {
  className?: string;
}

export const SectionSalesCopyedit = ({
  className,
}: SectionSalesCopyeditProps) => {
  const containerClassName = classNames(className, "SectionSalesCopyedit");

  return (
    <section className={containerClassName}>
      <div className="container mx-auto grid max-w-screen-xl grid-cols-12 lg:gap-x-10">
        <div className="col-span-12 text-center">
          <span className="block text-6xl lg:text-8xl">💳</span>
          <span className="hidden text-2xl font-normal lg:inline-block lg:text-5xl lg:font-light">
            A Web3 Savings Protocol for Everyone
          </span>
          <span className="inline-block text-3xl font-bold lg:text-7xl">
            Unlock the Power of
            <br className="hidden lg:inline-block" /> DeFi Together
          </span>
          <div className="my-10" />
          <p className="text-xl">
            Get rewarded for saving money in cryptocurrencies like USDC
          </p>
        </div>
      </div>
      <div className="my-20" />
      <div className="container mx-auto grid max-w-screen-xl grid-cols-12 gap-y-10 lg:gap-x-10">
        <Feature
          emoji="🏦"
          className="col-span-12 text-center lg:col-span-4"
          title="Savings"
          description="Deposit USDC, and other tokens, into an easy to use and secure Web3 savings network."
        />
        <Feature
          emoji="💸"
          className="col-span-12 text-center lg:col-span-4"
          title="Prizes"
          description="Win prizes for having good financial habits. More deposits means higher prizes!"
        />
        <Feature
          emoji="💰"
          className="col-span-12 text-center lg:col-span-4"
          title="Rewards"
          description="Get rewarded by partners simply for trying new protocols and saving cryptocurrencies."
        />
      </div>
      <div className="w-42 container mx-auto flex flex-col items-center justify-center pt-32 text-center">
        <ModalInjectIFrame
          href="https://app.pooltogether.com"
          name="PoolTogether"
        >
          <button className="btn btn-lg btn-purple">
            Deposit in Web3 Savings
          </button>
        </ModalInjectIFrame>
        <p className="text-sm">
          And be part of a community{" "}
          <a
            className="link"
            target={"_blank"}
            href="https://friendsofpooly.com"
            rel="noreferrer"
          >
            #DefendingDeFi with Friends of Pooly
          </a>{" "}
        </p>
      </div>
    </section>
  );
};

const Feature = ({
  className,
  emoji = "🏦",
  title = "Feature ",
  description = "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. ",
  imgSrc = "/img/network/ethereum.svg",
}: any) => {
  const iconStyle = classNames("Icon", "w-8 h-8 mx-auto");
  const titleStyle = classNames("Title", "text-2xl font-bold");
  const descStyle = classNames("Description", "leading-7 text-lg");
  return (
    <div className={className}>
      {emoji ? (
        <span className="text-5xl">{emoji}</span>
      ) : (
        <img className={iconStyle} src={imgSrc} alt={title} />
      )}
      <div className="my-4" />
      <span className={titleStyle}>{title}</span>
      <p className={descStyle}>{description}</p>
    </div>
  );
};

export default SectionSalesCopyedit;
