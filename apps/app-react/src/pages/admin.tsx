import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import classNames from "classnames";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
import FormUtilsStringBytes32Encode from "@/components/FormUtilsStringBytes32Encode";
import FormMintSavingsCard from "@/components/FormMintSavingsCard";

const Activate = () => {
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
      <div className="container mx-auto max-w-screen-sm">
        <FormUtilsStringBytes32Encode className="w-full" />
      </div>
    </section>
  );
};

const SectionDesktop = () => {
  const classes = classNames("py-32");
  return (
    <div className={classes}>
      <div className="container mx-auto max-w-screen-sm">
        <div className="w-full col-span-12 h-full">
          <FormUtilsStringBytes32Encode className="w-full" />
          <FormMintSavingsCard className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Activate;
