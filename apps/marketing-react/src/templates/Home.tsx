import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import WalletConnect from "@/components/WalletConnect";

type IHomeProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Home = (props: IHomeProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white overflow-x-hidden ">
    {props.meta}
    <div className="min-h-vh mx-auto h-10 w-full z-10">
      <Header className="absolute top left-0 right-0 px-8 py-4" />

      <div className="bg-neutral-100 dark:bg-neutral-800 pt-12">
        {props.children}
      </div>
      <Footer />
    </div>
    <WalletConnect />
  </div>
);

export { Home };
