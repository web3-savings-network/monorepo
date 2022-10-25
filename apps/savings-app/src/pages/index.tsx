import AccountTotalPrizes from "@/components/AccountTotalPrizes";
import CardStackSetGlobalFocus from "@/components/Card/CardStackSetGlobalFocus";
import CardTotalPrizes from "@/components/CardTotalPrizes";
import { ModalCardAddToGlobalState } from "@/components/ModalCardAddToGlobalState";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import classNames from "classnames";

import {
  ModalInjectIFrame,
  ResponsiveMobileAndDesktop,
} from "@chance-cards/framework-react";

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

const SectionMobile = () => {
  return (
    <section className="py-32">
      <div className="flex flex-center flex-col">
        <h3 className="font-normal text-3xl">Coming Soon</h3>
        <p className="">Are ypu ready to start winning!?</p>
        <div className="my-4" />
        <img src="/img/card-stack.png" className="w-2/3 max-auto blur-md" />
      </div>
    </section>
  );
};

const SectionDesktop = () => {
  const classes = classNames("py-32");
  return (
    <div className={classes}>
      <div className="container mx-auto max-w-screen-xl grid grid-cols-12">
        <div className="col-span-5 text-left">
          <h3 className="font-normal text-xl">Savings Account</h3>
        </div>
        <div className="col-span-7 text-right">
          <ModalCardAddToGlobalState>
            <button className="btn btn-blue">Add Savings Card +</button>
          </ModalCardAddToGlobalState>
        </div>
      </div>

      <div className="my-10" />

      <div className="container mx-auto max-w-screen-xl grid grid-cols-12 lg:gap-x-28">
        <div className="lg:col-span-6">
          <div className="flex justify-between">
            <AccountTotalPrizes />
            <span className="tag tag-green tag-sm">All Prizes & Rewards</span>
          </div>
          <div className="my-6" />
          <div className="card1 h-full flex flex-center flex-col">
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
          <div className="flex flex-center">
            <img src="/img/card-stack.png" className="w-2/3 max-auto blur-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
