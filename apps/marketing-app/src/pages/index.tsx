import {
  ModalInjectIFrame,
  ResponsiveMobileAndDesktop,
} from "@chance-cards/framework-react";
import { SectionDeployedOn } from "@/components/Sections/SectionDeployedOn";
import SectionGettingStarted from "@/components/Sections/SectionGettingStarted";
import SectionSalesCopyedit from "@/components/Sections/SectionSalesCopyedit";
import { Home } from "@/templates/Home";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { image } from "token-icons";
import SectionDeployedOnComingSoon from "@/components/Sections/SectionDeployedOnComingSoon";

const Index = () => {
  return (
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
};

const SectionMobile = (props) => {
  return (
    <div className="content">
      <SectionSalesCopyedit className="content py-32 " />
    </div>
  );
};
const SectionDesktop = (props) => {
  return (
    <div className="">
      <SectionHero />
      <SectionDeployedOnComingSoon className="content font-primary" />
      <div className="my-20" />
      <SectionSalesCopyedit className="content px-10 py-20 bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200  dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900" />

      <SectionGettingStarted className="content px-10 font-primary py-20" />
    </div>
  );
};

const SectionHero = (props) => {
  return (
    <section className="py-32 content font-primary">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-x-10">
        <div className="col-span-12 lg:col-span-7 pr-10 lg:pr-20 flex items-centers justify-center">
          <div className="text-center lg:text-left">
            <span className="font-bold text-5xl lg:text-7xl">🏦</span>
            <h2 className="font-bold text-neutral-600 dark:text-white text-3xl lg:text-5xl">
              Web3 Savings Protocol
            </h2>
            <h3 className="font-normal text-xl">
              <span className="font-bold">Save money.</span> Get rewards from
              your favorite digital communities.
            </h3>
            <div className="my-6" />

            <ul className="list-disc pl-6 text-xl">
              <li className="py-3">
                <img
                  className="w-6 h-6 mr-2 inline"
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
              >
                PoolTogether
              </a>{" "}
              prize network and start winning.
            </p>
            <div className="mt-8" />
            <div className="flex justify-start items-center mt-5">
              <ModalInjectIFrame
                href="https://app.pooltogether.com"
                name="PoolTogether"
              >
                <button className="btn btn-lg btn-blue">
                  Deposit USDC Now
                </button>
              </ModalInjectIFrame>
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
              <img className="pt-2" src="/img/ios-horiz.png" />
            </div>
          </ResponsiveMobileAndDesktop>
        </div>
      </div>
    </section>
  );
};

export default Index;
