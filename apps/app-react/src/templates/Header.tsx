import * as React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";

import { AppColorMode } from "@/components/App/AppColorMode";
import { AppLogo } from "@/components/App/AppLogo";
import { Web3CardChainSelection } from "@/components/Web3CardChainSelection";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const containerClassName = classNames(
    className,
    "HomeHeader",
    "absolute top left-0 right-0  flex items-center justify-between p-8 dark:text-white"
  );
  return (
    <div className={containerClassName}>
      <div className=" align-center flex w-1/3 items-center justify-between">
        <AppLogo />
      </div>
      <div className="w-1/3">
        <Web3CardChainSelection />
      </div>
      <div className="flex w-1/3 items-center justify-end">
        <ConnectButton
          showBalance={false}
          accountStatus={{ smallScreen: "avatar", largeScreen: "avatar" }}
          chainStatus={{ smallScreen: "none", largeScreen: "icon" }}
        />
        {/* <div className="mx-3"/> */}
        {/* <AppColorMode className="" /> */}
      </div>
    </div>
  );
};

export default Header;
