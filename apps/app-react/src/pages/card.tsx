import { ERC721TokenURI } from "@turbo-eth/erc721-wagmi";
import { useNetworkContract } from "@web3-savings-cards/deployments";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
import classNames from "classnames";

import AccountTotalPrizes from "@/components/AccountTotalPrizes";
import CardStackSetGlobalFocus from "@/components/Card/CardStackSetGlobalFocus";
import CardTotalPrizes from "@/components/CardTotalPrizes";
import { ModalCardAddToGlobalState } from "@/components/ModalCardAddToGlobalState";
import Web3CardPreview from "@/components/Web3CardPreview";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Card = () => {
  const classes = classNames("py-32");

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <ResponsiveMobileAndDesktop>
        <SectionMobile />
        <SectionDesktop />
      </ResponsiveMobileAndDesktop>
    </Main>
  );
};

const SectionMobile = () => (
  <section className="py-32">
    <div className="flex-center flex flex-col">
      <h3 className="text-3xl font-normal">Coming Soon</h3>
      <p className="">Are ypu ready to start winning!?</p>
      <div className="my-4" />
      <img src="/img/card-stack.png" className="max-auto w-2/3 blur-md" />
    </div>
  </section>
);

const SectionDesktop = () => {
  const classes = classNames("py-32");
  const contract = useNetworkContract("localhost", "Web3Card");
  return (
    <div className={classes}>
      <div className="container mx-auto grid max-w-screen-xl grid-cols-12">
        <div className="col-span-5 text-left">
          <h3 className="text-xl font-normal">Savings Account</h3>
        </div>
        <div className="col-span-7 text-right">
          <ModalCardAddToGlobalState>
            <button className="btn btn-blue">Add Savings Card +</button>
          </ModalCardAddToGlobalState>
        </div>
      </div>

      <div className="my-10" />

      <div className="container mx-auto grid max-w-screen-xl grid-cols-12 lg:gap-x-28">
        <div className="lg:col-span-6">
          <div className="flex justify-between">
            <AccountTotalPrizes />
            <span className="tag tag-green tag-sm">All Prizes & Rewards</span>
          </div>
          <div className="my-6" />
          <div className="card1 flex-center flex h-full flex-col">
            <span className=" text-center">Partnership Cards Coming Soon</span>
            <div className="my-3" />
          </div>
          <CardStackSetGlobalFocus />
        </div>
        <div className="lg:col-span-6">
          <div className="flex justify-between">
            <CardTotalPrizes />
            <span className="tag tag-green tag-sm">Card Prizes</span>
          </div>
          <div className="mt-20" />
          <div className="flex-center flex">
            <Web3CardPreview />
            {/* <ERC721TokenURI
              tokenId={1}
              contractAddress={"0x975Ab64F4901Af5f0C96636deA0b9de3419D0c2F"}
            /> */}
            {/* <img src="/img/card-stack.png" className="w-2/3 max-auto blur-md" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
