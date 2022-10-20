import * as React from "react";
import classNames from "classnames";

interface SectionDeployedOnProps {
  className?: string;
}

export const SectionDeployedOn = ({ className }: SectionDeployedOnProps) => {
  const containerClassName = classNames(className, "SectionDeployedOn");

  return (
    <section className={containerClassName}>
      <div className={"container mx-auto max-w-screen-xl"}>
        <h3 className="font-light text-2xl text-center">Available On</h3>
        <hr className="max-w-xs mx-auto mt-5 mb-10 opacity-25" />
        <div className="grid grid-cols-12 gap-x-4 text-center">
          <Network
            title="Ethereum"
            description="L1"
            imgSrc="/img/network/Ethereum.svg"
          />
          <Network
            title="Optimism"
            description="L2"
            imgSrc="/img/network/optimism.svg"
          />
          <Network
            title="Polygon"
            description="L1/L2"
            imgSrc="/img/network/polygon.svg"
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
  title = "Ethereum",
  description = "Network",
  imgSrc = "/img/network/ethereum.svg",
}) => {
  const iconStyle = classNames("Icon", "w-16 h-16 mx-auto");
  const titleStyle = classNames("Title", "text-lg font-bold");
  const descStyle = classNames("Description", "text-lg font-normal block");
  const ctaStyle = classNames("CTA", "block mt-2 text-md font-light");
  return (
    <div className="col-span-4">
      <img className={iconStyle} src={imgSrc} alt={title} />
      <div className="my-4" />
      <span className={titleStyle}>{title}</span>
      <div className="mt-6 flex items-center justify-center">
        <button className="btn btn-dark">Mint Card</button>
        <div className="mx-2" />
        <button className="btn btn-light">Deposit</button>
        {/* <span className={descStyle}>{description}</span> */}
      </div>
    </div>
  );
};

export default SectionDeployedOn;
