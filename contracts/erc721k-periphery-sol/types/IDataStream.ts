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

export interface IDataStreamInterface extends utils.Interface {
  contractName: "IDataStream";
  functions: {
    "get(address[],bytes[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "get",
    values: [string[], BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface IDataStream extends BaseContract {
  contractName: "IDataStream";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDataStreamInterface;

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
    get(
      targets: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string] & { value: string }>;
  };

  get(
    targets: string[],
    data: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    get(
      targets: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    get(
      targets: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    get(
      targets: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
