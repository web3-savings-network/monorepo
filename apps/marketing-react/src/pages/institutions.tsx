import FormRegisterInstitution from "@/components/FormRegisterInstitution";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import classNames from "classnames";
import { image } from "token-icons";
const Card = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="px-10">
        <SectionOne />
        <h3 className="font-normal text-7xl my-10 text-center">🏆</h3>
        <div className="py-8 lg:py-10" />
        <SectionRegistration />
        <div className="py-8 lg:py-10" />
        <SectionFeatures />
      </div>
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-lg text-center">
        <img
          className="w-32 h-32 mr-2 inline"
          src={image("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")}
        />
        <div className="my-6" />
        <h3 className="font-normal text-3xl lg:text-5xl">
          Are you ready to deposit
        </h3>
        <h2 className="font-bold text-5xl lg:text-7xl">$750,000+</h2>
        <h3 className="font-normal text-xl lg:text-2xl ">
          into the PoolTogether Prize Savings Network?
          {/* to start earning exponential value on your cryptocurrency? */}
        </h3>
        <div className="my-10" />
        <p className="leading-9 text-xl lg:w-2/3 mx-auto">
          The Chance Delegation primitive supercharges organizations and
          institutions with a powerful{" "}
          <span className="font-bold">Web3 Finance hyperstructure</span>{" "}
          primitive.
        </p>
        <div className="my-4" />
        <p className="">
          Pioneered by the{" "}
          <a
            className="link"
            target={"_blank"}
            href={"https://twitter.com/b_asselstine"}
          >
            PoolTogether
          </a>{" "}
          team.
        </p>
      </div>
    </section>
  );
};

const SectionRegistration = (props) => {
  return (
    <section>
      <div className="container max-w-screen-md mx-auto">
        <div className="text-center">
          <h3 className="font-bold font-primary text-3xl lg:text-5xl">
            Join the Winning Team
          </h3>
          <h3 className="font-normal font-primary leading-6 lg:leading-8 lg:text-xl mt-4">
            We'll show you how use{" "}
            <span className="font-bold">Chance Delegation</span> and other{" "}
            <br /> <span className="font-bold">Web3 Finance primitives</span> to
            drive real growth.
          </h3>
        </div>
        <div className="my-8 lg:my-10" />
        <FormRegisterInstitution className="card p-10" />
      </div>
    </section>
  );
};

const SectionFeatures = (props) => {
  const titleClasses = classNames(
    "text-gray-700 text-3xl title-font font-bold mb-2"
  );
  const descClasses = classNames("text-gray-900 text-lg mb-2");

  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-screen-xl px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <span className="">
              <img
                className="w-full mr-2 inline"
                src={image("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")}
              />
            </span>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={titleClasses}>Secure USDC Vaults</h2>
            <p className={descClasses}>
              Keep your business or organizations in assets in secure USDC
              vaults. Only the interest earned is used to purchase tickets. The
              principal is never touched -{" "}
              <span className="font-bold">it's always there for you.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={titleClasses}>Battled Tested Protocol</h2>
            <p className={descClasses}>
              The PoolTogether protocol is battle-tested and has been running
              since 2019. Simple and reliable. Adding complexity only where it's
              required.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <span className="">
              <img
                className="w-full auto mr-2 inline"
                src={
                  "/img/pooltogether/pooltogether-token--purple-gradient.png"
                }
              />
            </span>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <span className="">
              <img
                className="w-full mr-2 inline"
                src={image("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")}
              />
            </span>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className={titleClasses}>Future Staking Pools</h2>
            <p className={descClasses}>
              Staked ETH is the future of base layer incentives. Web3 Savings
              Cards will provide a simple way to stake ETH and contribute to the
              open and decentralized PoolTogether Prize Savings Network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
