import * as React from "react";
import classNames from "classnames";
import Link from "next/link";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
import { AppLogo } from "@/components/AppLogo";
import { AppColorMode } from "@/components/AppColorMode";
import ModalMenuMobile from "@/components/ModalMenuMobile";
import AppLogoSmall from "@/components/AppLogoSmall";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const containerClassName = classNames(
    className,
    "Header",
    "flex items-center justify-between dark:text-white"
  );
  return (
    <div className={containerClassName}>
      <ResponsiveMobileAndDesktop>
        <SectionMobile />
        <SectionDesktop />
      </ResponsiveMobileAndDesktop>
    </div>
  );
};

const SectionMobile = (props) => {
  return (
    <header className="flex justify-between items-center w-full">
      <AppLogoSmall />
      <span className="flex flex-center">
        <Link href="/register">
          <a className="tag tag-blue text-sm ">
            <span className="px-2 py-1">Early Access</span>
          </a>
        </Link>
        <span className="mx-2" />
        <ModalMenuMobile>
          <span className="ml-auto tag tag-cloud">
            <svg
              width="22"
              height="22"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1875 76.5625H82.8125M17.1875 51.5625H82.8125M17.1875 26.5625H82.8125"
                stroke="#333333"
                stroke-width="9.375"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* MENU */}
          </span>
        </ModalMenuMobile>
      </span>
    </header>
  );
};
const SectionDesktop = (props) => {
  return (
    <>
      <div className=" align-center flex items-center justify-between">
        <AppLogo />
        <a target={"_blank"} href={process.env.NEXT_PUBLIC_SAVINGS_APP_URL}>
          <span className="tag tag-green mx-3 px-3 py-1">Account</span>
        </a>
        {/* <span className="mx-3">|</span>
        <Link href="/institutions">
          <a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
            Institutions
          </a>
        </Link>
        <span className="mx-3">|</span>
        <Link href="/partner">
          <a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
            Partner
          </a>
        </Link> */}
      </div>
      <div className="flex items-center justify-end">
        <Link href="/partner">
          <a className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
            Partnership
          </a>
        </Link>
        <span className="mx-3"></span>
        <Link href="/register">
          <a className="tag tag-blue text-sm ">
            <span className="px-2 py-1">Early Access</span>
          </a>
        </Link>
        {/* <span className="mx-3"></span> */}
        {/* <AppColorMode className="" /> */}
      </div>
    </>
  );
};

export default Header;
