import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import { ModalIFrame } from "./ModalIFrame";

interface ModalInjectIFrameProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
  name: string;
}

export const ModalInjectIFrame = ({
  className,
  children,
  name = "Uniswap",
  href = "https://app.uniswap.org",
}: ModalInjectIFrameProps) => {
  const classes = classNames(className, "ModalInjectIFrame", "cursor-pointer");
  const [showModal, hideModal] = useModal(() => (
    <ModalIFrame hideModal={hideModal}>
      <div
        className="flex items-center justify-between rounded-t-lg bg-neutral-800 text-white p-4"
        style={{ height: "7.5%" }}
      >
        <div className="w-full lg:w-1/2">Application: {name}</div>
        <div className="w-full lg:w-1/2 text-right">
          <a href={href} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
        </div>
      </div>
      <iframe className="w-full h-max" src={href} style={{ height: "92.5%" }} />
    </ModalIFrame>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalInjectIFrame;
