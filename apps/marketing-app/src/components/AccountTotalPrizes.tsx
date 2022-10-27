import * as React from "react";
import classNames from "classnames";

interface AccountTotalPrizesProps {
  className?: string;
  defaultAmount?: string;
}

export const AccountTotalPrizes = ({
  className,
  defaultAmount = "$0.00",
}: AccountTotalPrizesProps) => {
  const containerClassName = classNames(className, "AccountTotalPrizes");
  return <div className={containerClassName}>{defaultAmount}</div>;
};

export default AccountTotalPrizes;
