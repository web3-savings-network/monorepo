import * as React from "react";
import classNames from "classnames";
import FormMintChanceCard from "../FormMintChanceCard";

interface SectionSalesCopyeditProps {
  className?: string;
}

export const SectionSalesCopyedit = ({
  className,
}: SectionSalesCopyeditProps) => {
  const containerClassName = classNames(
    className,
    "SectionSalesCopyedit",
    "py-32"
  );

  return (
    <section className={containerClassName}>
      <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-x-10">
        <div className="col-span-12 text-center">
          <h3 className="font-bold text-7xl">
            Unlock the Power of
            <br />
            Web3 Together
          </h3>
          <div className="my-10" />
          <h4 className="text-3xl">
            <span className="font-normal">Chance Delegation</span> is a novel{" "}
            <span className="font-normal">DeFi primitive</span>
          </h4>
          <p className="">
            Giving supers powers to those who choose to use this powerful
            primitive.
          </p>
        </div>
      </div>
      <div className="my-20" />
      <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-x-10">
        <Feature
          className="col-span-4 text-center"
          title="Reward Users"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
        />
        <Feature
          className="col-span-4 text-center"
          title="Reward Users"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
        />
        <Feature
          className="col-span-4 text-center"
          title="Reward Users"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps."
        />
      </div>
    </section>
  );
};

const Feature = ({
  className,
  title = "Feature ",
  description = "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. ",
  imgSrc = "/img/network/ethereum.svg",
}: any) => {
  const iconStyle = classNames("Icon", "w-8 h-8 mx-auto");
  const titleStyle = classNames("Title", "text-2xl font-bold");
  const descStyle = classNames("Description", "leading-7");
  return (
    <div className={className}>
      <img className={iconStyle} src={imgSrc} alt={title} />
      <div className="my-4" />
      <span className={titleStyle}>{title}</span>
      <p className={descStyle}>{description}</p>
    </div>
  );
};

export default SectionSalesCopyedit;
