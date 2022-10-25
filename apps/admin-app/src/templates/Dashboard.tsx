import type { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import classNames from "classnames";
import DashboardHeader from "./DashboardHeader";

type IDashboardProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Dashboard = (props: IDashboardProps) => {
  const sidebarClasses = classNames("Sidebar", "px-6 py-8", "lg:col-span-2");
  const headerClasses = classNames(
    "Header",
    "px-6 py-8",
    "bg-gray-100 shadow-sm w-full z-10 relative"
  );
  const mainClasses = classNames(
    "Main",
    "lg:col-span-10",
    "bg-neutral-100 dark:bg-neutral-600"
  );

  return (
    <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white">
      {props.meta}
      <div className="min-h-vh mx-auto h-10 w-full grid grid-cols-12">
        <DashboardSidebar className={sidebarClasses} />

        <div className={mainClasses}>
          <DashboardHeader className={headerClasses} />
          <div className="content bg-neutral-100 dark:bg-neutral-600">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
