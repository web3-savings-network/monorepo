import type { ReactNode } from "react";
import Footer from "./Footer";
import HomeHeader from "./HomeHeader";

type IHomeProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Home = (props: IHomeProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white">
    {props.meta}
    <div className="min-h-vh mx-auto h-10 w-full flex flex-col">
      <HomeHeader />
      <div className="content bg-neutral-100 dark:bg-neutral-700 pt-12 h-full">
        {props.children}
      </div>
      <Footer className="mt-auto" />
    </div>
  </div>
);

export { Home };
