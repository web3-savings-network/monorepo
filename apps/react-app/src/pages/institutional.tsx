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
      <SectionTwo />
    </Main>
  );
};

const SectionOne = (props) => {
  return (
    <section className="pt-32">
      <div className="container mx-auto max-w-screen-md text-center">
        <h2 className="font-bold text-7xl">Giving at Scale</h2>
        <h3 className="font-normal text-3xl">
          Drive Users Engagement and Positive Growth Metrics
        </h3>
        <div className="my-10" />
        <p className="leading-7 text-xl">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps.
        </p>
      </div>
    </section>
  );
};

const SectionTwo = (props) => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-4xl mb-2 ">
              The Numbers Don't Lie
            </h1>
            <div className="leading-relaxed text-lg">
              PoolTogether is a leading protocol for driving user engagement and
              positive growth metrics. The base primitive of "chance", that
              PoolTogether is built on, is a perfect blockchain primitive to
              drive mainstream User adoption.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl ">12.7K</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl ">45+M</h2>
            <p className="leading-relaxed">TVL</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl ">35</h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl ">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://dummyimage.com/600x300"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;
