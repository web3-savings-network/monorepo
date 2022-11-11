import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import FormMintChanceCard from "./FormMintChanceCard";
import Link from "next/link";
import ModalFullScreen from "./Modal/ModalFullScreen";

interface ModalCardActivateProps {
  className?: string;
  children?: React.ReactNode;
  network: string;
}

export const ModalCardActivate = ({
  className,
  children,
  network = "mainnet",
}: ModalCardActivateProps) => {
  const classes = classNames(className, "ModalCardActivate", "cursor-pointer");
  const [showModal, hideModal] = useModal(() => (
    <ModalFullScreen hideModal={hideModal}>
      <div className="grid grid-cols-12 gap-x-10 h-full lg:p-10">
        <div className="col-span-4 pr-10 content">
          <span className="block font-normal text-neutral-500 text-xl">
            Getting Started
          </span>
          <h3 className="font-bold text-neutral-600 text-3xl">
            Web3 Savings Account
          </h3>
          <div className="my-6" />
          <p className="leading-5">
            Start saving USDC in the PoolTogether Prize Savings network. And
            earn a chance to win daily prizes.
          </p>
          <div className="my-6" />
          <h3 className="font-bold text-xl mb-3">💳 Web3 Savings Card</h3>
          <p className="leading-5">
            Web3 Savings Cards graphically represent your Web3 savings journey.
            Letting you know how much you have saved, and how many chances you
            have to win.
          </p>
          <h3 className="font-bold text-xl mt-5 mb-3">🎨 Custom Design</h3>
          <p className="leading-5">
            Design a Chance Card that represents you. Or choose from one of our
            pre-made designs. You can even change your design at any time.
          </p>
          <h3 className="font-bold text-xl mt-5 mb-3">Experimental Wallet</h3>
          <p className="leading-5">
            Want to push the limits of Web3 product experience? Enable{" "}
            <span className="font-bold">TURBO Mode</span> to activate the highly
            experimental{" "}
            <span className="font-bold">Web3 Savings Cards Web3 Wallet</span>.
          </p>
          <p className="text-sm italic">⛹️‍♂️ Fvck it, we ball!</p>
          <div className="my-6" />
          <h3 className="font-normal text-md">Terms of Service</h3>
          <p className="text-xs">
            By connecting a wallet, you agree to Web3 Savings Cards By
            connecting a wallet, you agree to Web3 Savings Cards{" "}
            <Link href="/terms-of-service">
              <a className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>
            </Link>{" "}
            and acknowledge that you have read and understand the{" "}
            <Link href="/disclaimer">
              <a className="text-blue-600 hover:text-blue-700">
                Web3 Savings Cards Protocol Disclaimer.
              </a>
            </Link>
          </p>
        </div>
        <div className="col-span-8 flex items-center justify-center border-l-2 border-neutral-200">
          <div className="max-w-screen-sm">
            <FormMintChanceCard />
          </div>
        </div>
      </div>
    </ModalFullScreen>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalCardActivate;
