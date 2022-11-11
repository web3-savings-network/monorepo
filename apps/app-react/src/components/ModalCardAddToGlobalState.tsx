import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import { ModalPanel } from "./Modal/ModalPanel";

interface ModalCardAddToGlobalStateProps {
  className?: string;
  children?: React.ReactNode;
}

export const ModalCardAddToGlobalState = ({
  className,
  children,
}: ModalCardAddToGlobalStateProps) => {
  const classes = classNames(
    className,
    "ModalCardAddToGlobalState",
    "cursor-pointer"
  );
  const [showModal, hideModal] = useModal(() => (
    <ModalPanel hideModal={hideModal}>
      <div className="">
        <h3 className="font-normal text-3xl">Coming Soon</h3>
        <hr className="my-3" />
        <p className="">We're aligning the winning blocks for you ✨ </p>
      </div>
    </ModalPanel>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalCardAddToGlobalState;
