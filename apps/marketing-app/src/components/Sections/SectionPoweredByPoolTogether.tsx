import * as React from "react";
import classNames from "classnames";

interface SectionPoweredByPoolTogetherProps {
  className?: string;
}

export const SectionPoweredByPoolTogether = ({
  className,
}: SectionPoweredByPoolTogetherProps) => {
  const containerClassName = classNames(
    className,
    "SectionPoweredByPoolTogether"
  );

  return (
    <section className="body-font">
      <div className="container mx-auto max-w-screen-lg flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-1/5 md:w-1/3 w-3/6 mb-10 md:mb-0 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            alt="hero"
            src="/img/pooltogether/pooltogether-mark--purple-gradient--square.png"
          />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium">
            Powered by PoolTogether
          </h1>
          <p className="mb-8 leading-8 text-lg">
            PoolTogether is a crypto-powered savings protocol based on Premium
            Bonds. Save money and have a chance to win every day.
          </p>
          <div className="flex justify-center mt-5">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Deposit Directly
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPoweredByPoolTogether;
