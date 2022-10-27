/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace ERC721Storage {
  export type ContractURIStruct = {
    name: string;
    description: string;
    image: string;
    externalLink: string;
    sellerFeeBasisPoints: string;
    feeRecipient: string;
  };

  export type ContractURIStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    name: string;
    description: string;
    image: string;
    externalLink: string;
    sellerFeeBasisPoints: string;
    feeRecipient: string;
  };
}

export interface MockERC721StorageInterface extends utils.Interface {
  contractName: "MockERC721Storage";
  functions: {
    "constructContractURI()": FunctionFragment;
    "constructTokenURI(uint256,bytes,bytes)": FunctionFragment;
    "getContractDescription()": FunctionFragment;
    "getSvgRender()": FunctionFragment;
    "getTraitsFetch()": FunctionFragment;
    "owner()": FunctionFragment;
    "render(bytes)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setContractURI((string,string,string,string,string,string))": FunctionFragment;
    "setSvgRender(address)": FunctionFragment;
    "setTraitsFetch(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "constructContractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "constructTokenURI",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractDescription",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSvgRender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTraitsFetch",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "render", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [ERC721Storage.ContractURIStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setSvgRender",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTraitsFetch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "constructContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "constructTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSvgRender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTraitsFetch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "render", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSvgRender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTraitsFetch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ContractURIUpdated(tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SvgRenderUpdated(address)": EventFragment;
    "TraitsFetchUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SvgRenderUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TraitsFetchUpdated"): EventFragment;
}

export type ContractURIUpdatedEvent = TypedEvent<
  [ERC721Storage.ContractURIStructOutput],
  { contractURI: ERC721Storage.ContractURIStructOutput }
>;

export type ContractURIUpdatedEventFilter =
  TypedEventFilter<ContractURIUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type SvgRenderUpdatedEvent = TypedEvent<[string], { svgRender: string }>;

export type SvgRenderUpdatedEventFilter =
  TypedEventFilter<SvgRenderUpdatedEvent>;

export type TraitsFetchUpdatedEvent = TypedEvent<
  [string],
  { traitsFetch: string }
>;

export type TraitsFetchUpdatedEventFilter =
  TypedEventFilter<TraitsFetchUpdatedEvent>;

export interface MockERC721Storage extends BaseContract {
  contractName: "MockERC721Storage";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockERC721StorageInterface;

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
    constructContractURI(
      overrides?: CallOverrides
    ): Promise<[string] & { uri: string }>;

    constructTokenURI(
      tokenId: BigNumberish,
      input0: BytesLike,
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { uri: string }>;

    getContractDescription(
      overrides?: CallOverrides
    ): Promise<[ERC721Storage.ContractURIStructOutput]>;

    getSvgRender(overrides?: CallOverrides): Promise<[string]>;

    getTraitsFetch(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    render(input: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContractURI(
      contractURI: ERC721Storage.ContractURIStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSvgRender(
      svgRender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTraitsFetch(
      traitsFetch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  constructContractURI(overrides?: CallOverrides): Promise<string>;

  constructTokenURI(
    tokenId: BigNumberish,
    input0: BytesLike,
    input1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getContractDescription(
    overrides?: CallOverrides
  ): Promise<ERC721Storage.ContractURIStructOutput>;

  getSvgRender(overrides?: CallOverrides): Promise<string>;

  getTraitsFetch(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  render(input: BytesLike, overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContractURI(
    contractURI: ERC721Storage.ContractURIStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSvgRender(
    svgRender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTraitsFetch(
    traitsFetch: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    constructContractURI(overrides?: CallOverrides): Promise<string>;

    constructTokenURI(
      tokenId: BigNumberish,
      input0: BytesLike,
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getContractDescription(
      overrides?: CallOverrides
    ): Promise<ERC721Storage.ContractURIStructOutput>;

    getSvgRender(overrides?: CallOverrides): Promise<string>;

    getTraitsFetch(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    render(input: BytesLike, overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setContractURI(
      contractURI: ERC721Storage.ContractURIStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setSvgRender(svgRender: string, overrides?: CallOverrides): Promise<void>;

    setTraitsFetch(
      traitsFetch: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractURIUpdated(tuple)"(
      contractURI?: null
    ): ContractURIUpdatedEventFilter;
    ContractURIUpdated(contractURI?: null): ContractURIUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SvgRenderUpdated(address)"(svgRender?: null): SvgRenderUpdatedEventFilter;
    SvgRenderUpdated(svgRender?: null): SvgRenderUpdatedEventFilter;

    "TraitsFetchUpdated(address)"(
      traitsFetch?: null
    ): TraitsFetchUpdatedEventFilter;
    TraitsFetchUpdated(traitsFetch?: null): TraitsFetchUpdatedEventFilter;
  };

  estimateGas: {
    constructContractURI(overrides?: CallOverrides): Promise<BigNumber>;

    constructTokenURI(
      tokenId: BigNumberish,
      input0: BytesLike,
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getContractDescription(overrides?: CallOverrides): Promise<BigNumber>;

    getSvgRender(overrides?: CallOverrides): Promise<BigNumber>;

    getTraitsFetch(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    render(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractURI(
      contractURI: ERC721Storage.ContractURIStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSvgRender(
      svgRender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTraitsFetch(
      traitsFetch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    constructContractURI(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructTokenURI(
      tokenId: BigNumberish,
      input0: BytesLike,
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getContractDescription(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSvgRender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTraitsFetch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContractURI(
      contractURI: ERC721Storage.ContractURIStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSvgRender(
      svgRender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTraitsFetch(
      traitsFetch: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
