import Web3CardPreview from "@/components/Web3CardPreview";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
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
      <SectionOne />
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-lg text-center">
        <Web3CardPreview />
      </div>
    </section>
  );
};

export default Card;
