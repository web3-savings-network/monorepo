import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="  w-full overflow-x-hidden bg-white p-0 text-neutral-700 antialiased dark:bg-neutral-800 dark:text-white">
    {props.meta}
    <div className="min-h-vh mx-auto flex h-full w-full flex-col">
      <Header className="px-8 py-4" />
      <div className=" flex-center flex flex-auto bg-neutral-100 dark:bg-neutral-800">
        {props.children}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  </div>
);

export { Main };
