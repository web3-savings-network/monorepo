import * as React from "react";
import classNames from "classnames";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface DashboardHeaderProps {
  className?: string;
}

export const DashboardHeader = ({ className }: DashboardHeaderProps) => {
  const containerClassName = classNames(className, "DashboardHeader");
  return (
    <div className={containerClassName}>
      <div className="flex items-center justify-between">
        <span className="">
          Account: <span className="tag-green">Unverified</span>
        </span>
        <ConnectButton
          showBalance={false}
          chainStatus={{ smallScreen: "icon", largeScreen: "icon" }}
          accountStatus={{ smallScreen: "avatar", largeScreen: "avatar" }}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
