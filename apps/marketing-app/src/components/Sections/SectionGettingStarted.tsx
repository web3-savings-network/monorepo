import * as React from "react";
import classNames from "classnames";

interface SectionGettingStartedProps {
  className?: string;
}

export const SectionGettingStarted = ({
  className,
}: SectionGettingStartedProps) => {
  const classes = classNames(className, "SectionGettingStarted");

  return (
    <section className={classes}>
      <div className="text-center">
        <img
          className="mx-auto w-32"
          src="https://thumbs.gfycat.com/FrayedSeriousIchneumonfly-size_restricted.gif"
        />

        <h3 className="font-bold text-7xl">Gooo Super DeFi</h3>
        <div className="my-4" />
        <p className="block font-normal text-2xl text-center">
          The <span className="font-bold">Web3 Savings Protocol</span> that
          grows stronger with <span className="font-bold">every deposit</span>
        </p>
      </div>
      <div className="my-20" />
      <div className="container max-w-screen-xl mx-auto flex flex-wrap">
        <ViewContentAndIOSPreview />
      </div>
      <div className="my-20" />
      {/* <div className="w-full text-center mt-10">
        <button className=" btn-emerald rounded-lg shadow-sm px-12 py-6 inline-block">
          <span className="font-bold text-2xl block">
            Download the Super DeFi Guide
          </span>
          <img
            className="w-32 mx-auto"
            src="https://i.pinimg.com/originals/8d/56/71/8d5671e5980bbc71c61bd7f1f521d3e4.gif"
          />
          <p className="mt-5 text-lg">Unlock your full Web3 potential today</p>
        </button>
      </div> */}
    </section>
  );
};

const ViewContentAndIOSPreview = (props) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-5 flex flex-center">
        <div className="">
          <img
            className="w-10 rounded-full"
            src="https://thumbs.gfycat.com/EagerFaithfulBobolink-max-1mb.gif"
          />
          <div className="my-4" />
          <h3 className="font-normal text-4xl">
            Adventure. Explore.
            <br />
            <span className="font-semibold">Earn chances to WIN!</span>
          </h3>
          <div className="my-10" />
          <p className="leading-8 text-xl">
            The PoolTogether Savings protocol is a{" "}
            <span className="font-semibold">community-owned</span> protocol that
            allows you to save money in popular cryptocurrencies like USDC.
          </p>
          <div className="my-10" />
          <p className="leading-6 font-semibold">
            You can also win prizes for practicing sgood financial habits.
          </p>
          <p className="">
            The more you save, the the higher your chances of winning! Save
            money, win prizes and get rewards from partner protocols.
            <br />
            <span className="font-bold">It's a win/win/win.</span>
          </p>
        </div>
      </div>
      <div className="col-span-7">
        <div className="" style={{ width: "130%" }}>
          <img className="max-w-screen-xs" src="/img/ios-screens.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionGettingStarted;