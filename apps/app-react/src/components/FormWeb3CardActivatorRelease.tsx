import * as React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNetworkContract } from "@web3-savings-cards/deployments";
import { Input, IsWalletConnected } from "@web3-savings-cards/framework-react";
import classNames from "classnames";
import { utils } from "ethers";
import { useForm } from "react-hook-form";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

interface FormWeb3CardActivatorReleaseProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormWeb3CardActivatorRelease = ({
  className,
}: FormWeb3CardActivatorReleaseProps) => {
  const contract = useNetworkContract("localhost", "Web3CardActivator");

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      amount: "0",
    },
  });

  const watchAll = watch();
  const { config } = usePrepareContractWrite({
    addressOrName: contract?.address || "",
    contractInterface: contract?.abi,
    functionName: "release",
    args: [utils.parseEther(watchAll.amount)],
    overrides: {},
  });
  const writing = useContractWrite(config);

  const onSubmit = async (_data: any) => {
    if (writing?.write) {
      writing.write();
    } else {
      throw new Error("No write function");
    }
  };

  const classes = classNames(className, "FormWeb3CardActivatorRelease");
  return (
    <>
      <div className={classes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-0 col-span-4"
        >
          <Input
            className="input"
            name="amount"
            placeholder="1 ETH"
            register={register}
          />
          <div className="my-3" />
          <IsWalletConnected
            loading={
              <div className="flex-center flex w-full text-center">
                <ConnectButton />
              </div>
            }
          >
            <div className="flex items-center">
              <button className="btn btn-indigo mx-auto w-[100%] rounded-full">
                <span className="block py-2">Release</span>
              </button>
            </div>
          </IsWalletConnected>
        </form>
      </div>
    </>
  );
};

export default FormWeb3CardActivatorRelease;
