import {
  ModalInjectIFrame,
  ResponsiveMobileAndDesktop,
} from "@web3-savings-cards/framework-react";
import Image from "next/image";
import { image } from "token-icons";

import { SectionDeployedOnComingSoon } from "@/components/Sections/SectionDeployedOnComingSoon";
import { SectionGettingStarted } from "@/components/Sections/SectionGettingStarted";
import { SectionSalesCopyedit } from "@/components/Sections/SectionSalesCopyedit";
import { Home } from "@/templates/Home";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

import IOS from "../../public/img/ios-horiz.png";

if (process.env.NODE_ENV === "development") {
  IOS.src = `http:localhost:3000${IOS.src}`;
}

const Index = () => (
  <Home
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
  </Home>
);

const SectionMobile = (props) => (
  <div className="content">
    <SectionSalesCopyedit className="content py-32 " />
  </div>
);
const SectionDesktop = (props) => (
  <div className="">
    <SectionHero />
    <SectionDeployedOnComingSoon className="content font-primary" />
    <div className="my-20" />
    <SectionSalesCopyedit className="content bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 px-10 py-20  dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900" />

    <SectionGettingStarted className="content px-10 py-20 font-primary" />
  </div>
);

const SectionHero = (props) => (
  <section className="content py-32 font-primary">
    <div className="container mx-auto grid max-w-screen-xl grid-cols-12 gap-x-10">
      <div className="items-centers col-span-12 flex justify-center pr-10 lg:col-span-7 lg:pr-20">
        <div className="text-center lg:text-left">
          <span className="text-5xl font-bold lg:text-7xl">🏦</span>
          <h2 className="text-3xl font-bold text-neutral-600 dark:text-white lg:text-5xl">
            Web3 Savings Protocol
          </h2>
          <h3 className="text-xl font-normal">
            <span className="font-bold">Save money.</span> Get rewards from your
            favorite digital communities.
          </h3>
          <div className="my-6" />

          <ul className="list-disc pl-6 text-xl">
            <li className="py-3">
              <img
                className="mr-2 inline h-6 w-6"
                src={image("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")}
              />
              <span className="font-bold">Deposit USDC:</span> Prizes created
              from earned interest.
            </li>{" "}
            <li className="py-3">
              <span className="font-bold">🏆 Win prizes:</span> Interest is
              randomly distributed to Users.
            </li>{" "}
            <li className="py-3">
              <span className="font-bold">📈 Get rewarded:</span> Earn bonus
              rewards and benefits from Partners.
            </li>
          </ul>
          <p className="">
            <span className="font-bold">It's that simple.</span> Join the{" "}
            <a
              className="link"
              target={"_blank"}
              href="https://pooltogether.com"
              rel="noreferrer"
            >
              PoolTogether
            </a>{" "}
            prize network and start winning.
          </p>
          <div className="mt-8" />
          <div className="mt-5 flex items-center justify-start">
            {/* <ModalInjectIFrame
              href="https://app.pooltogether.com"
              name="PoolTogether"
            >
            </ModalInjectIFrame> */}
            <a
              target={"_blank"}
              href="https://app.pooltogether.com"
              rel="noreferrer"
            >
              <button className="btn btn-lg btn-blue">Deposit USDC Now</button>
            </a>
            <div className="mx-4" />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5">
        <ResponsiveMobileAndDesktop>
          <></>
          <div
            className=""
            style={{
              position: "relative",
              left: "-20%",
              width: "170%",
            }}
          >
            {/* <Image
              className="pt-2"
              alt="IOS Devices"
              src={IOS}
              // src="/img/ios-horiz.png"
              // width={1000}
              // height={500}
            /> */}
            <img
              className="pt-2"
              alt="IOS Devices"
              src="/img/ios-horiz.png"
              // width={1000}
              // height={500}
            />
          </div>
        </ResponsiveMobileAndDesktop>
      </div>
    </div>
  </section>
);

export default Index;
