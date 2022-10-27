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
    <ModalPanel hideModal={hideModal}>hello</ModalPanel>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalCardAddToGlobalState;
