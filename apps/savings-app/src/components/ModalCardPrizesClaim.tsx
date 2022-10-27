import * as React from "react";
import classNames from "classnames";

interface ModalCardAddToGlobalStateProps {
  className?: string;
  children?: React.ReactNode;
}

export const ModalCardAddToGlobalState = ({
  className,
  children,
}: ModalCardAddToGlobalStateProps) => {
  const containerClassName = classNames(className, "ModalCardAddToGlobalState");
  return <div className={containerClassName}>{children}</div>;
};

export default ModalCardAddToGlobalState;
