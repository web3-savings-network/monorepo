import * as React from "react";
import classNames from "classnames";
import { useChanceCards } from "@web3-savings-cards/framework-react";

interface IsSignedInProps {
  className?: string;
  children: Array<React.ReactNode>;
}

export const IsSignedIn = ({ className, children }: IsSignedInProps) => {
  const containerClassName = classNames(className, "IsSignedIn");
  const state = useChanceCards();

  return (
    <div className={containerClassName}>
      {state?.isSignedIn ? children[0] : children[1]}
    </div>
  );
};

export default IsSignedIn;
