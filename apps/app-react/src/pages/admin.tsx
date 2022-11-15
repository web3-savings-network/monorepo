import { Balance } from "@turbo-eth/core-wagmi";
import { useNetworkContract } from "@web3-savings-cards/deployments";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
import classNames from "classnames";

import { FormUtilsStringBytes32Encode } from "@/components/FormUtilsStringBytes32Encode";
import { FormWeb3CardActivatorRelease } from "@/components/FormWeb3CardActivatorRelease";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const SectionMobile = () => (
  <section className="py-32">
    <div className="container mx-auto max-w-screen-sm">
      <FormUtilsStringBytes32Encode className="w-full" />
    </div>
  </section>
);

const SectionDesktop = () => {
  const classes = classNames("py-32");

  const contractActivator = useNetworkContract(
    "localhost",
    "Web3CardActivator"
  );

  return (
    <div className={classes}>
      <div className="min-w-auto container mx-auto w-[720px] max-w-screen-lg">
        <div className="w-full">
          <h3 className="text-3xl font-bold">Web3 Card Activator</h3>
          <div className="flex items-center justify-between">
            <span className="">Balance</span>
            <Balance address={contractActivator?.address} />
          </div>
          <FormWeb3CardActivatorRelease />
          <div className="my-4" />
          <FormUtilsStringBytes32Encode className="w-full" />
        </div>
      </div>
    </div>
  );
};

const Activate = () => (
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

export default Activate;
