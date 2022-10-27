import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import { ModalFullScreen } from "./Modal/ModalFullScreen";
import FormMintChanceCard from "./FormMintChanceCard";

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
  const classes = classNames(
    className,
    "ModalCardActivate",
    "cursor-pointer tag tag-cloud"
  );
  const [showModal, hideModal] = useModal(() => (
    <ModalFullScreen hideModal={hideModal}>
      <div className="grid grid-cols-12 gap-x-10 h-full lg:p-10">
        <div className="col-span-4 pr-10 ">
          <span className="block font-normal text-neutral-500 text-xl">
            Getting Started
          </span>
          <h3 className="font-bold text-neutral-600 text-3xl">
            Web3 Savings Account
          </h3>
          <div className="my-6" />
          <p className="leading-5">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </p>
          <h3 className="font-bold text-xl mt-5 mb-3">Prize Savings</h3>
          <p className="leading-5">
            Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </p>
          <h3 className="font-bold text-xl mt-5 mb-3">Card Types</h3>
          <p className="leading-5">
            Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </p>
          <h3 className="font-bold text-xl mt-5 mb-3">Terms of Service</h3>
          <p className="leading-5">
            Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
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
