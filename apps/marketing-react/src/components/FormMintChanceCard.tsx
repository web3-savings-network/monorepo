import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import { useAccount, useContractRead } from "wagmi";
import { BigNumber, utils } from "ethers";

import { useNetworkContract } from "@web3-savings-cards/deployments";
import { FieldSelect, FieldToggle } from "@web3-savings-cards/framework-react";
import ModalAlphaModeInformation from "./ModalAlphaModeInformation";
import ERC721KPreview from "./ERC721K/ERC721KPreview";

interface FormMintChanceCardProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormMintChanceCard = ({ className }: FormMintChanceCardProps) => {
  const contract = useNetworkContract("localhost", "Web3Card");

  const {
    control,
    register,
    watch,
    handleSubmit,
    setValue,
    formState: {},
  } = useForm({
    defaultValues: {
      pos1: { value: "0", label: "Wolf" },
      pos2: { value: "1", label: "Parrot" },
      pos3: { value: "2", label: "Fox" },
      pos4: { value: "3", label: "Octo" },
    },
  });
  const watchAll = watch();

  const account = useAccount();
  const { data, error, isLoading } = useContractRead({
    addressOrName: contract?.address || "",
    contractInterface: contract?.abi || "",
    functionName: "preview",
    args: ["0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"],
  });

  const onSubmit = async (_data: any) => {
    console.log("writing");
  };

  const optionsEmoji = [
    { value: "🍀", label: "🍀 " },
    { value: "☘️", label: "☘️ " },
    { value: "🌱", label: "🌱 " },
    { value: "🛡️", label: "🛡️ " },
    { value: "🍄", label: "🍄 " },
    { value: "🦊", label: "🦊 " },
    { value: "💰", label: "💰 " },
    { value: "🔮", label: "🔮 " },
    { value: "🌞", label: "🌞 " },
    { value: "🌎", label: "🌎 " },
    { value: "🔥", label: "🔥 " },
    { value: "🏆", label: "🏆 " },
    { value: "🚀", label: "🚀 " },
    { value: "🍑", label: "🍑 " },
    { value: "🌟", label: "🌟 " },
    { value: "🐺", label: "🐺 " },
    { value: "🌈", label: "🌈 " },
    { value: "🌍", label: "🌍 " },
    { value: "🦄", label: "🦄 " },
    { value: "🌳", label: "🌳 " },
    { value: "🌊", label: "🌊 " },
  ];

  const optionsColor = [
    { value: "99", label: "Select Color" },
    { value: "0", label: "🟢 Green" },
    { value: "1", label: "🟡 Yellow" },
    { value: "2", label: "🟣 Purple" },
    { value: "3", label: "🔴 Red" },
    { value: "4", label: "⚫ Black" },
    { value: "5", label: "🔵 Blue" },
  ];

  const classes = classNames(className, "FormMintChanceCard");
  return (
    <>
      <div className={classes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4"
        >
          <div className="flex justify-between items-center">
            <span className="">
              <span className="font-bold">Alpha Mode</span>
              <ModalAlphaModeInformation className="mx-2">
                Learn More
              </ModalAlphaModeInformation>
            </span>
            <span className="block relative">
              <FieldToggle
                name="turbo"
                control={control}
                setFieldValue={setValue}
              />
            </span>
          </div>
          <div className="my-6" />
          <div className="text-center z-5 relative col-span-8">
            <ERC721KPreview
              contractAddress={contract?.address || ""}
              args={["0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"]}
            />
            <img className="rounded-xl shadow-lg mx-auto w-full" src={data} />
          </div>
          <div className="my-4" />
          <div className="flex items-center w-full">
            <FieldSelect
              className="w-1/2"
              control={control}
              name="emoji"
              options={optionsEmoji}
            />
            <div className="w-4" />
            <FieldSelect
              className="w-1/2 "
              control={control}
              name="style"
              options={optionsColor}
            />
          </div>
          <button className="btn btn-indigo btn-lg mt-3 w-full">
            Activate Chance Card
          </button>
        </form>
      </div>
    </>
  );
};

export default FormMintChanceCard;
