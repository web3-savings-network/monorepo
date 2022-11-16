import * as React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
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
      <div className=" align-center flex w-1/2 items-center justify-between lg:w-1/3">
        <AppLogo />
      </div>
      <div className="w-1/3">
        <ResponsiveMobileAndDesktop>
          <></>
          <Web3CardChainSelection />
        </ResponsiveMobileAndDesktop>
      </div>
      <div className="flex items-center justify-end lg:w-1/3">
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
