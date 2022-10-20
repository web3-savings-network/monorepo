import type { ReactNode } from "react";
import { AppColorMode } from "@/components/App/AppColorMode";
import { AppConfig } from "@/utils/AppConfig";
import Footer from "./Footer";
import Header from "./Header";

type IHomeProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Home = (props: IHomeProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white">
    {props.meta}
    <div className="min-h-vh mx-auto h-10 w-full">
      <Header />

      <div className="content bg-neutral-100 dark:bg-neutral-700 pt-12">
        {props.children}
      </div>
      <Footer />
    </div>
  </div>
);

export { Home };
