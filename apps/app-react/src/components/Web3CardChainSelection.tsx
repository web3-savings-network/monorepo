import * as React from "react";

import classNames from "classnames";

import { SelectBlockchainNetwork } from "./Web3/SelectBlockchainNetwork";

interface Web3CardChainSelectionProps {
  className?: string;
}

export const Web3CardChainSelection = ({
  className,
}: Web3CardChainSelectionProps) => {
  const containerClassName = classNames(
    className,
    "Web3CardChainSelection",
    "container mx-auto grid grid-cols-12"
  );
  return (
    <div className={containerClassName}>
      <div className="flex-center col-span-4 flex text-center">
        <SelectBlockchainNetwork network="ethereum" disabled />
      </div>
      <div className="flex-center col-span-4 flex text-center">
        <SelectBlockchainNetwork network="optimism" />
      </div>
      <div className="flex-center col-span-4 flex text-center">
        <SelectBlockchainNetwork network="polygon" />
      </div>
    </div>
  );
};

export default Web3CardChainSelection;
