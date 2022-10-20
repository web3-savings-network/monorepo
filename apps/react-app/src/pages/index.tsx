import { SectionDeployedOn } from "@/components/Sections/SectionDeployedOn";
import SectionMintCard from "@/components/Sections/SectionMintCard";
import SectionPoweredByPoolTogether from "@/components/Sections/SectionPoweredByPoolTogether";
import SectionSalesCopyedit from "@/components/Sections/SectionSalesCopyedit";
import { Home } from "@/templates/Home";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import classNames from "classnames";

const Index = () => {
  const classes = classNames(
    "mx-auto text-center text-neutral-500 shadow-sm dark:text-white py-32",
    "bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200  dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
  );

  return (
    <Home
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="content">
        <SectionOne />
        <SectionDeployedOn />
        <div className="my-20" />
        <SectionSalesCopyedit className="py-48 bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200  dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900" />
        <div className="my-20" />
        <SectionTwo />
        {/* <SectionMintCard /> */}
        <SectionPoweredByPoolTogether />
      </div>
    </Home>
  );
};

const SectionOne = (props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-12 gap-x-10">
        <div className="col-span-12 lg:col-span-7 pr-10 lg:pr-32">
          <h2 className="font-thin text-7xl">Chance Cards</h2>
          <h3 className="font-normal text-5xl">Give the Gift of Chance</h3>
          <div className="my-10" />
          <p className="leading-7 text-xl">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5">yo</div>
      </div>
    </section>
  );
};

const SectionTwo = (props) => {
  const stepTitle = classNames(
    "font-medium title-font text-lg text-gray-900 dark:text-gray-100 mb-1 tracking-wider"
  );
  const stepDescription = classNames(
    "leading-5 text-sm text-gray-900 dark:text-gray-100 mb-1"
  );

  return (
    <section className="body-font">
      <div className="text-center">
        <h3 className="font-thin text-7xl">Getting Started</h3>
        <div className="my-4" />
        <span className="block font-semibold text-4xl">
          Deposit - Save - Win
        </span>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className={stepTitle}>STEP 1</h2>
                <p className={stepDescription}>
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className={stepTitle}>STEP 2</h2>
                <p className={stepDescription}>
                  Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                  slow-carb health goth, vape typewriter.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className={stepTitle}>STEP 3</h2>
                <p className={stepDescription}>
                  Coloring book nar whal glossier master cleanse umami. Salvia
                  +1 master cleanse blog taiyaki.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className={stepTitle}>STEP 4</h2>
                <p className={stepDescription}>
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className={stepTitle}>FINISH</h2>
                <p className={stepDescription}>
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/1200x500"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
