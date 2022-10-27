import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import WalletConnect from "@/components/WalletConnect";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-white p-0 text-neutral-700 antialiased dark:bg-neutral-700 dark:text-white overflow-x-hidden">
    {props.meta}
    <div className="min-h-vh mx-auto h-full w-full">
      <Header className="px-8 py-4" />
      <div className=" bg-neutral-100 dark:bg-neutral-800">
        {props.children}
        <WalletConnect />
      </div>

      <Footer />
    </div>
  </div>
);

export { Main };
