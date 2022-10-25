import AffiliateFormPreRegister from "@/components/Affiliate/AffiliateFormPreRegister";
import FormRegisterPartner from "@/components/FormRegisterPartner";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Affiliates = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="">
        <SectionOne />
        <div className="py-8 lg:py-10" />
        <SectionStatisticsBreakdown />
        <SectionSalesCopyedit />
        <div className="py-8 lg:py-20" />
        <section>
          <div className="container max-w-screen-sm mx-auto">
            <div className="text-center my-5">
              <h3 className="font-bold font-primary text-4xl">
                Be a Part of Web3 History
              </h3>
              <h3 className="font-normal font-primary text-xl">
                Drive unstoppable growth to a global Prize Savings Network
              </h3>
            </div>
            <FormRegisterPartner className="card p-10" />
          </div>
        </section>
        <div className="py-8 lg:py-20" />
      </div>
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="pt-32 px-10">
      <div className="container mx-auto max-w-screen-lg text-center">
        <span className="text-6xl">📈</span>
        <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl">
          Real Growth
        </h2>
        <h3 className="font-normal text-xl lg:text-2xl">
          Drive direct deposits to the Prize Savings Network and get rewarded
        </h3>
        <div className="my-10" />
        <span className="block text-4xl mb-2">
          {/* <span className="text-xl">💻</span>{" "} */}
          <span className="text-3xl">💃 </span>
          <span className="">🎊</span>
          <span className="text-3xl"> 🕺</span>
          {/* <span className="text-2xl">📱</span> */}
        </span>
        <p className="leading-7 text-lg lg:text-2xl w-3/4 mx-auto text-center">
          <span className="font-bold">
            Are you a developer, influencer, or community manager?
          </span>{" "}
        </p>
        <div className="my-4" />
        <p className="text-sm lg:text-base">
          Join our partner program and get recognized for your efforts.
        </p>
      </div>
      <div className="my-10" />
      <div className="container max-w-screen-sm mx-auto">
        <FormRegisterPartner className="card p-10" />
      </div>
    </section>
  );
};

const SectionStatisticsBreakdown = (props) => {
  return (
    <section className="py-0">
      <div className="container max-w-screen-xl px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <img
              className="w-12 h-12 mr-2 inline"
              src={"/img/pooltogether/pooltogether-token--purple-gradient.png"}
            />
            <h1 className="title-font font-medium text-4xl lg:text-5xl mb-2 ">
              <span className="font-bold">Growing Web3.</span> Together.
            </h1>
            <p className="leading-8 mb-4 text-lg">
              PoolTogether is a leading protocol for driving user engagement and
              positive growth metrics.{" "}
              <span className="font-bold">
                It's simple and easy to understand.
              </span>
            </p>
            <p className="leading-8 mb-4 text-lg">
              It is, and will continue to be, the most effective way to drive
              sustainable Web3 user growth.{" "}
            </p>
            <p className="leading-8 text-lg font-bold">
              Join the winning team 💪
            </p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl">12K+</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl">45M+</h2>
            <p className="leading-relaxed">TVL</p>
          </div>
          {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl">4</h2>
            <p className="leading-relaxed">Versions</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl">1</h2>
            <p className="leading-relaxed">Community</p>
          </div> */}
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0 ">
          <div
            className="lg:pl-20"
            style={{
              width: "180%",
            }}
          >
            <img
              className="w-full h-full"
              src="/img/air-district-labs.png"
              alt="stats"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionSalesCopyedit = (props) => {
  return (
    <section>
      <div className="card container mx-auto max-w-screen-lg text-center">
        <div className="lg:px-20 lg:py-8">
          <div>
            <span className="font-bold text-5xl lg:text-7xl">💪🏽</span>
            <div className="my-8" />

            <h3 className="font-bold text-4xl">
              Increase TVL by end of 2023 <br />{" "}
              <span className="text-6xl">$1,000,000,000.00+</span>
              <br />
            </h3>
            <span className="text-xl">
              Web3 Savings Cards is on a mission to put the <br /> Prize Savings
              Network in TURBO mode!
            </span>
            <div className="my-8" />
          </div>
          <div className="my-10" />
          <div className="container mx-auto max-w-screen-sm text-left content">
            <h1 className="title-font font-bold text-3xl mb-2 ">
              Want to become a Web3 Power player?
            </h1>
            <p className="">Leave your mark on the history of Web3.</p>
            <p className="">
              Help create the world's first Web3 Savings Hyperstructure.
              Designed to help everyone, around the world, save and grow their
              wealth.{" "}
              <span className="font-bold">It's not magic, it's math.</span>
            </p>
            <h3 className="font-semibold text-neutral-600 text-2xl">
              Drive Deposits
            </h3>
            <p className="">
              Help drive deposits to the Prize Savings Network and get rewarded.
            </p>
            <h3 className="font-semibold text-neutral-600 text-2xl">
              Engage Communities
            </h3>
            <p className="">
              Interact with the communities, help grow the Prize Savings and get
              rewarded.
            </p>
            <h3 className="font-semibold text-neutral-600 text-2xl">
              Build the Future
            </h3>
            <p className="">
              Be part of history by hyper scaling elegant Web3 Finance products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
