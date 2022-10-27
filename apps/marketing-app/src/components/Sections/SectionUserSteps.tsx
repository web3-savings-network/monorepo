import * as React from "react";
import classNames from "classnames";

interface SectionGettingStartedProps {
  className?: string;
}

export const SectionGettingStarted = ({
  className,
}: SectionGettingStartedProps) => {
  const stepTitle = classNames(
    "font-medium title-font text-lg text-gray-900 dark:text-gray-100 mb-1 tracking-wider"
  );
  const stepDescription = classNames(
    "leading-5 text-sm text-gray-900 dark:text-gray-100 mb-1"
  );

  return (
    <section className="body-font">
      <div className="text-center">
        <span className="text-7xl">🤑</span>
        <h3 className="font-bold text-7xl">Getting Started</h3>
        <div className="my-4" />
        <span className="block font-light text-4xl">
          Deposit. Save. Win. And get rewarded! <br />
          <span className="font-bold text-2xl">It's that easy!</span>
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
                <h2 className={stepTitle}>Deposit & Instant Savings Account</h2>
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
                <h2 className={stepTitle}>Start Saving</h2>
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
                <h2 className={stepTitle}>
                  <span className="font-bold">Win Prizes</span>
                </h2>
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
                <h2 className={stepTitle}> Get Rewarded</h2>
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
      <div className="w-full text-center mt-10">
        <button className="btn btn-emerald btn-2xl">
          <span className="font-light">Download the Beginners DeFi Guide</span>
        </button>
        <p className="">
          Learn how you unlock the full potential of Web3 today.
        </p>
      </div>
    </section>
  );
};

const ViewContentAndIOSPreview = (props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 flex flex-center">
        <div className="">
          <h3 className="font-normal text-4xl">A Product Designed For You</h3>
          <p className="">
            Morbi eu est condimentum velit imperdiet rutrum non ut leo.
            Vestibulum sed pharetra odio, et pharetra eros. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Pellentesque euismod congue lectus nec maximus. Etiam sed
            tincidunt odio, quis accumsan mauris. Quisque in lorem ullamcorper,
            pretium lorem nec, imperdiet lacus. Cras tristique mi ac lorem
            rutrum pellentesque.
          </p>
        </div>
      </div>
      <div className="col-span-7">
        <img
          className="max-w-screen-xs"
          src="/img/ios/ios-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionGettingStarted;
