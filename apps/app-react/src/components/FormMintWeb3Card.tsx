import * as React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNetworkContract } from "@web3-savings-cards/deployments";
import {
  FieldSelect,
  Input,
  IsWalletConnected,
} from "@web3-savings-cards/framework-react";
import classNames from "classnames";
import { constants, utils } from "ethers";
import { useForm } from "react-hook-form";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

import { Web3CardPreview } from "./Web3CardPreview";

interface FormMintWeb3CardProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormMintWeb3Card = ({ className }: FormMintWeb3CardProps) => {
  const contract = useNetworkContract("localhost", "Web3CardActivator");

  const { control, register, watch, handleSubmit } = useForm({
    defaultValues: {
      address: constants.AddressZero,
      emoji: { value: 0, label: "🏦" },
      color: { value: 0, label: "🟣 Purple" },
    },
  });

  const watchAll = watch();
  const account = useAccount();
  const [valueAmount, setValueAmount] = React.useState<string>("0");
  React.useEffect(() => {
    if (watchAll.color.value + watchAll.emoji.value > 0) {
      setValueAmount(utils.parseEther("0.01").toString());
    } else {
      setValueAmount("0");
    }
  }, [watchAll]);
  const { config } = usePrepareContractWrite({
    addressOrName: contract?.address || "",
    contractInterface: contract?.abi,
    functionName: "activateWithStyle",
    args: [account.address, watchAll.color.value, watchAll.emoji.value],
    overrides: {
      gasLimit: 177713,
      value: valueAmount,
    },
  });
  const writing = useContractWrite(config);

  const onSubmit = async (_data: any) => {
    if (writing?.write) {
      writing.write();
    } else {
      throw new Error("No write function");
    }
  };

  const emojiOptions = [
    { value: 0, label: "🏦" },
    { value: 1, label: "🔥" },
    { value: 2, label: "🌟" },
    { value: 3, label: "🚀" },
    { value: 4, label: "👑" },
    { value: 5, label: "🔮" },
    { value: 6, label: "🌈" },
    { value: 7, label: "🎉" },
    { value: 8, label: "🎁" },
    { value: 9, label: "🎲" },
    { value: 10, label: "🎰" },
    { value: 11, label: "🎮" },
    { value: 12, label: "🎳" },
    { value: 13, label: "🎸" },
    { value: 14, label: "🎹" },
    { value: 15, label: "🎼" },
    { value: 16, label: "🏀" },
    { value: 17, label: "🏈" },
    { value: 19, label: "🏊" },
    { value: 20, label: "🏆" },
    { value: 21, label: "🏓" },
    { value: 22, label: "🏔" },
    { value: 23, label: "🏕" },
    { value: 24, label: "🏖" },
    { value: 25, label: "🏗" },
    { value: 26, label: "🏘" },
    { value: 27, label: "🏙" },
    { value: 28, label: "🏚" },
    { value: 29, label: "🏛" },
    { value: 30, label: "🏜" },
    { value: 31, label: "🏝" },
    { value: 32, label: "🏞" },
    { value: 33, label: "🦜" },
    { value: 35, label: "🦊" },
    { value: 36, label: "🦋" },
    { value: 37, label: "🦌" },
    { value: 38, label: "🦍" },
    { value: 39, label: "🦎" },
    { value: 40, label: "🦏" },
    { value: 41, label: "🦐" },
    { value: 42, label: "🦑" },
  ];

  const optionsColor = [
    { value: "99", label: "Select Color" },
    { value: 0, label: "🟣 Purple" },
    { value: 1, label: "⚫ Black" },
    { value: 2, label: "🔵 Red" },
    { value: 3, label: "🔵 Blue" },
  ];

  const classes = classNames(className, "FormMintWeb3Card");
  return (
    <>
      <div className={classes}>
        <Web3CardPreview
          color={watchAll.color.value}
          emoji={watchAll.emoji.value}
          className="w-full rounded-xl border-2 border-white border-opacity-40 shadow-md hover:shadow-lg"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-0 col-span-4"
        >
          <Input
            hidden
            disabled
            className="input"
            name="address"
            placeholder="Enter a string to encode"
            register={register}
          />
          <div className="flex items-center ">
            <FieldSelect
              control={control}
              name="emoji"
              label="Emoji"
              className="mt-6 w-1/2"
              options={emojiOptions}
              labelDisable={true}
            />
            <div className="mx-3" />
            <FieldSelect
              control={control}
              name="color"
              label="Card Style"
              className="mt-6 w-1/2"
              options={optionsColor}
              labelDisable={true}
            />
          </div>
          <div className="my-3 flex  items-center justify-between">
            <span className="text-xs font-medium">Activation Cost</span>
            <span className="tag tag-cloud">
              Ξ {utils.formatEther(valueAmount)}
            </span>
          </div>
          <IsWalletConnected
            loading={
              <div className="flex-center flex w-full text-center">
                <ConnectButton className="w-full" />
              </div>
            }
          >
            <div className="flex items-center">
              <button className="btn btn-indigo btn-pill mx-auto w-[100%] rounded-full">
                <span className="block py-2">Activate Web3 Savings Card</span>
              </button>
            </div>
          </IsWalletConnected>
        </form>
      </div>
    </>
  );
};

export default FormMintWeb3Card;
