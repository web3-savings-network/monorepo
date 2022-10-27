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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RolesAuthorityInterface extends utils.Interface {
  contractName: "RolesAuthority";
  functions: {
    "authority()": FunctionFragment;
    "canCall(address,address,bytes4)": FunctionFragment;
    "doesRoleHaveCapability(uint8,address,bytes4)": FunctionFragment;
    "doesUserHaveRole(address,uint8)": FunctionFragment;
    "getRolesWithCapability(address,bytes4)": FunctionFragment;
    "getUserRoles(address)": FunctionFragment;
    "isCapabilityPublic(address,bytes4)": FunctionFragment;
    "owner()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setPublicCapability(address,bytes4,bool)": FunctionFragment;
    "setRoleCapability(uint8,address,bytes4,bool)": FunctionFragment;
    "setUserRole(address,uint8,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canCall",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "doesRoleHaveCapability",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "doesUserHaveRole",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRolesWithCapability",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRoles",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCapabilityPublic",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicCapability",
    values: [string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleCapability",
    values: [BigNumberish, string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserRole",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doesRoleHaveCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doesUserHaveRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRolesWithCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCapabilityPublic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPublicCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PublicCapabilityUpdated(address,bytes4,bool)": EventFragment;
    "RoleCapabilityUpdated(uint8,address,bytes4,bool)": EventFragment;
    "UserRoleUpdated(address,uint8,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicCapabilityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleCapabilityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRoleUpdated"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<
  [string, string],
  { user: string; newAuthority: string }
>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { user: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PublicCapabilityUpdatedEvent = TypedEvent<
  [string, string, boolean],
  { target: string; functionSig: string; enabled: boolean }
>;

export type PublicCapabilityUpdatedEventFilter =
  TypedEventFilter<PublicCapabilityUpdatedEvent>;

export type RoleCapabilityUpdatedEvent = TypedEvent<
  [number, string, string, boolean],
  { role: number; target: string; functionSig: string; enabled: boolean }
>;

export type RoleCapabilityUpdatedEventFilter =
  TypedEventFilter<RoleCapabilityUpdatedEvent>;

export type UserRoleUpdatedEvent = TypedEvent<
  [string, number, boolean],
  { user: string; role: number; enabled: boolean }
>;

export type UserRoleUpdatedEventFilter = TypedEventFilter<UserRoleUpdatedEvent>;

export interface RolesAuthority extends BaseContract {
  contractName: "RolesAuthority";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RolesAuthorityInterface;

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
    authority(overrides?: CallOverrides): Promise<[string]>;

    canCall(
      user: string,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    doesRoleHaveCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    doesUserHaveRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getRolesWithCapability(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserRoles(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    isCapabilityPublic(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      newAuthority: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPublicCapability(
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoleCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserRole(
      user: string,
      role: BigNumberish,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  canCall(
    user: string,
    target: string,
    functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  doesRoleHaveCapability(
    role: BigNumberish,
    target: string,
    functionSig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  doesUserHaveRole(
    user: string,
    role: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getRolesWithCapability(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserRoles(arg0: string, overrides?: CallOverrides): Promise<string>;

  isCapabilityPublic(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    newAuthority: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPublicCapability(
    target: string,
    functionSig: BytesLike,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoleCapability(
    role: BigNumberish,
    target: string,
    functionSig: BytesLike,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserRole(
    user: string,
    role: BigNumberish,
    enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    canCall(
      user: string,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    doesRoleHaveCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    doesUserHaveRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRolesWithCapability(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserRoles(arg0: string, overrides?: CallOverrides): Promise<string>;

    isCapabilityPublic(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicCapability(
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoleCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserRole(
      user: string,
      role: BigNumberish,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address,address)"(
      user?: string | null,
      newAuthority?: string | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(
      user?: string | null,
      newAuthority?: string | null
    ): AuthorityUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      user?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      user?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PublicCapabilityUpdated(address,bytes4,bool)"(
      target?: string | null,
      functionSig?: BytesLike | null,
      enabled?: null
    ): PublicCapabilityUpdatedEventFilter;
    PublicCapabilityUpdated(
      target?: string | null,
      functionSig?: BytesLike | null,
      enabled?: null
    ): PublicCapabilityUpdatedEventFilter;

    "RoleCapabilityUpdated(uint8,address,bytes4,bool)"(
      role?: BigNumberish | null,
      target?: string | null,
      functionSig?: BytesLike | null,
      enabled?: null
    ): RoleCapabilityUpdatedEventFilter;
    RoleCapabilityUpdated(
      role?: BigNumberish | null,
      target?: string | null,
      functionSig?: BytesLike | null,
      enabled?: null
    ): RoleCapabilityUpdatedEventFilter;

    "UserRoleUpdated(address,uint8,bool)"(
      user?: string | null,
      role?: BigNumberish | null,
      enabled?: null
    ): UserRoleUpdatedEventFilter;
    UserRoleUpdated(
      user?: string | null,
      role?: BigNumberish | null,
      enabled?: null
    ): UserRoleUpdatedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    canCall(
      user: string,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doesRoleHaveCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doesUserHaveRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRolesWithCapability(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRoles(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isCapabilityPublic(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      newAuthority: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPublicCapability(
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoleCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserRole(
      user: string,
      role: BigNumberish,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canCall(
      user: string,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doesRoleHaveCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doesUserHaveRole(
      user: string,
      role: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRolesWithCapability(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRoles(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCapabilityPublic(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPublicCapability(
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoleCapability(
      role: BigNumberish,
      target: string,
      functionSig: BytesLike,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserRole(
      user: string,
      role: BigNumberish,
      enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
