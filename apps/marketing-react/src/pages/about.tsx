import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
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
      <SectionOne />
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-lg text-center">
        <h2 className="font-bold text-7xl">Turbo Mode</h2>
        <h3 className="font-normal text-3xl">Hyper Web3 Growth</h3>
        <div className="my-10" />
        <p className="leading-7 text-xl">
          We're on a mission to (r)evolutionize the way people save and connect.
        </p>
        <p className="text-center mt-8">
          <span className="tag tag-green">WIN</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
