import * as React from "react";
import classNames from "classnames";
import AppLogo from "@/components/App/AppLogo";
import AppColorMode from "@/components/App/AppColorMode";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const containerClassName = classNames(
    className,
    "Header",
    "absolute top left-0 right-0  flex items-center justify-between p-8 dark:text-white"
  );
  return (
    <div className={containerClassName}>
      <div className=" align-center flex items-center justify-between">
        <AppLogo />
      </div>
      <div className="flex items-center justify-end">
        <Link href="/institutional">
          <a className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
            Institutional
          </a>
        </Link>
        <button className="btn btn-white mx-3">Application</button>
        <AppColorMode className="" />
      </div>
    </div>
  );
};

export default Header;
