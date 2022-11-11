import * as React from "react";
import classNames from "classnames";

interface CardGlobalFocusProps {
  className?: string;
}

export const CardGlobalFocus = ({ className }: CardGlobalFocusProps) => {
  const containerClassName = classNames(className, "CardGlobalFocus");
  return <div className={containerClassName}></div>;
};

export default CardGlobalFocus;
