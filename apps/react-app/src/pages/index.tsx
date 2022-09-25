import FormMintChanceCard from "@/components/FormMintChanceCard";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white">
        <div className="container mx-auto max-w-screen-sm">
          <FormMintChanceCard className="flex flex-col" />
        </div>
      </div>
      {/* <section className="py-10">
        <div className="container mx-auto max-w-screen-xl"></div>
      </section> */}
    </Main>
  );
};

export default Index;
