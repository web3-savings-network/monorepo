import * as React from "react";
import classNames from "classnames";

interface CardStackSetGlobalFocusProps {
  className?: string;
}

export const CardStackSetGlobalFocus = ({
  className,
}: CardStackSetGlobalFocusProps) => {
  const containerClassName = classNames(className, "CardStackSetGlobalFocus");
  return <div className={containerClassName}></div>;
};

export default CardStackSetGlobalFocus;
