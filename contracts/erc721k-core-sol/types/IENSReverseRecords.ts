/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IENSReverseRecordsInterface extends utils.Interface {
  contractName: "IENSReverseRecords";
  functions: {
    "getNames(address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getNames", values: [string[]]): string;

  decodeFunctionResult(functionFragment: "getNames", data: BytesLike): Result;

  events: {};
}

export interface IENSReverseRecords extends BaseContract {
  contractName: "IENSReverseRecords";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IENSReverseRecordsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getNames(
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<[string[]] & { r: string[] }>;
  };

  getNames(addresses: string[], overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getNames(addresses: string[], overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getNames(
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNames(
      addresses: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
