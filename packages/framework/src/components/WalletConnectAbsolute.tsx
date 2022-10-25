import * as React from "react";
import classNames from "classnames";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectButtonCustom from "./ConnectButtonCustom";

interface WalletConnectAbsoluteProps {
  className?: string;
  connectRender?: React.ReactNode;
  preConnectRender?: React.ReactNode;
}

export const WalletConnectAbsolute = ({
  className,
  connectRender,
  preConnectRender,
}: WalletConnectAbsoluteProps) => {
  const containerClassName = classNames(
    className,
    "WalletConnectAbsolute",
    ""
  );
  return (
    <div className={containerClassName}>
      <span className='tag tag-smoke'>
      <ConnectButtonCustom connectRender={connectRender} preConnectRender={preConnectRender} />
      </span>
    </div>
  );
};

export default WalletConnectAbsolute;
