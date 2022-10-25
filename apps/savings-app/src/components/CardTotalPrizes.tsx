import * as React from "react";
import classNames from "classnames";

interface CardTotalPrizesProps {
  className?: string;
  defaultAmount?: string;
}

export const CardTotalPrizes = ({
  className,
  defaultAmount = "$0.00",
}: CardTotalPrizesProps) => {
  const containerClassName = classNames(className, "CardTotalPrizes");
  return <div className={containerClassName}>{defaultAmount}</div>;
};

export default CardTotalPrizes;
