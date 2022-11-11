import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import ModalPanel from "./Modal/ModalPanel";

interface ModalAlphaModeInformationProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalAlphaModeInformation = ({
  className,
  children,
}: ModalAlphaModeInformationProps) => {
  const classes = classNames(
    className,
    "ModalAlphaModeInformation",
    "cursor-pointer"
  );
  const [showModal, hideModal] = useModal(() => (
    <ModalPanel hideModal={hideModal}>
      <div className="content">
        <span className="font-bold text-6xl">🐺</span>
        <h3 className="font-bold text-5xl">Unlock Alpha Mode</h3>
        <p className="">
          Join the Alpha pack and gain access to experimental feature sets.
        </p>
        <p className="">
          The highly experimental features sets will push the boundaries of Web3
          product experiences. The smart contracts are unaudited and the
          interfaces are in active development.
        </p>
        <p className="font-bold">
          DO NOT PUT a significant amount of funds in the Smart Card.
        </p>
        <p className="">
          Be prepared to lose everything, because this is an ALPHA product.
        </p>
        <div className="mt-8" />
        {/* <p className="">Are you ready to join the Web3 alpha pack?</p> */}
        <span className="font-light tag tag-charcoal">Join the ALPHA Pack</span>
      </div>
    </ModalPanel>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalAlphaModeInformation;
