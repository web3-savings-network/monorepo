/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SVGColorInterface extends utils.Interface {
  contractName: "SVGColor";
  functions: {
    "autoLinearGradient(bytes,bytes,bytes)": FunctionFragment;
    "byte2uint8(bytes,uint256)": FunctionFragment;
    "colors(string)": FunctionFragment;
    "getColor(string,uint8)": FunctionFragment;
    "getRgba(string)": FunctionFragment;
    "linearGradient(bytes,bytes,bytes)": FunctionFragment;
    "toRgba(bytes,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "autoLinearGradient",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "byte2uint8",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "colors", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getColor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getRgba", values: [string]): string;
  encodeFunctionData(
    functionFragment: "linearGradient",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "toRgba",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "autoLinearGradient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "byte2uint8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "colors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRgba", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "linearGradient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toRgba", data: BytesLike): Result;

  events: {};
}

export interface SVGColor extends BaseContract {
  contractName: "SVGColor";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SVGColorInterface;

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
    "autoLinearGradient(bytes,bytes,bytes)"(
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "autoLinearGradient(bytes,bytes,bytes,bytes)"(
      _coordinates: BytesLike,
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    byte2uint8(
      _data: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    colors(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "getColor(string,uint8)"(
      _colorName: string,
      _alpha: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getColor(string)"(
      _colorName: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRgba(_colorName: string, overrides?: CallOverrides): Promise<[string]>;

    linearGradient(
      _lg: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    toRgba(
      _rgba: BytesLike,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  "autoLinearGradient(bytes,bytes,bytes)"(
    _colors: BytesLike,
    _id: BytesLike,
    _customAttributes: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "autoLinearGradient(bytes,bytes,bytes,bytes)"(
    _coordinates: BytesLike,
    _colors: BytesLike,
    _id: BytesLike,
    _customAttributes: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  byte2uint8(
    _data: BytesLike,
    _offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  colors(arg0: string, overrides?: CallOverrides): Promise<string>;

  "getColor(string,uint8)"(
    _colorName: string,
    _alpha: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getColor(string)"(
    _colorName: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getRgba(_colorName: string, overrides?: CallOverrides): Promise<string>;

  linearGradient(
    _lg: BytesLike,
    _id: BytesLike,
    _customAttributes: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  toRgba(
    _rgba: BytesLike,
    offset: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    "autoLinearGradient(bytes,bytes,bytes)"(
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "autoLinearGradient(bytes,bytes,bytes,bytes)"(
      _coordinates: BytesLike,
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    byte2uint8(
      _data: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    colors(arg0: string, overrides?: CallOverrides): Promise<string>;

    "getColor(string,uint8)"(
      _colorName: string,
      _alpha: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getColor(string)"(
      _colorName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRgba(_colorName: string, overrides?: CallOverrides): Promise<string>;

    linearGradient(
      _lg: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    toRgba(
      _rgba: BytesLike,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    "autoLinearGradient(bytes,bytes,bytes)"(
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "autoLinearGradient(bytes,bytes,bytes,bytes)"(
      _coordinates: BytesLike,
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    byte2uint8(
      _data: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    colors(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getColor(string,uint8)"(
      _colorName: string,
      _alpha: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getColor(string)"(
      _colorName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRgba(_colorName: string, overrides?: CallOverrides): Promise<BigNumber>;

    linearGradient(
      _lg: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toRgba(
      _rgba: BytesLike,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "autoLinearGradient(bytes,bytes,bytes)"(
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "autoLinearGradient(bytes,bytes,bytes,bytes)"(
      _coordinates: BytesLike,
      _colors: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    byte2uint8(
      _data: BytesLike,
      _offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    colors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getColor(string,uint8)"(
      _colorName: string,
      _alpha: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getColor(string)"(
      _colorName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRgba(
      _colorName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linearGradient(
      _lg: BytesLike,
      _id: BytesLike,
      _customAttributes: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toRgba(
      _rgba: BytesLike,
      offset: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
