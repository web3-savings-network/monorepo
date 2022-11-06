import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { BigNumber, utils } from "ethers";
import Select from "react-select";

import { useNetworkContract } from "@chance-cards/deployments";

interface FormMintSavingsCardProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormMintSavingsCard = ({
  className,
}: FormMintSavingsCardProps) => {
  const contract = useNetworkContract("localhost", "Web3Card");

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      pos1: { value: "0", label: "Wolf" },
      pos2: { value: "1", label: "Parrot" },
      pos3: { value: "2", label: "Fox" },
      pos4: { value: "3", label: "Octo" },
    },
  });
  const account = useAccount();
  const { config } = usePrepareContractWrite({
    addressOrName: "0xE7e558Bced1dee713aA337b78EB81e5E6b1658Ef" || "",
    contractInterface: contract?.abi,
    functionName: "mint",
    args: [account.address],
  });

  const writing = useContractWrite(config);

  const onSubmit = async (_data: any) => {
    console.log("writing");
    writing.write();
  };

  const classes = classNames(
    className,
    "FormMintSavingsCard"
    // "grid grid-cols-12 gap-10"
  );
  const classesLabel = "text-xs font-semibold mb-1 block ";

  return (
    <>
      <div className={classes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4"
        >
          <button className="btn btn-white btn-lg mt-3 w-full">
            Activate Chance Card
          </button>
        </form>
      </div>
    </>
  );
};

export default FormMintSavingsCard;
