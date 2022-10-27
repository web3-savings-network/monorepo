/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Svg, SvgInterface } from "../Svg";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
    ],
    name: "byte2uint8",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_len",
        type: "uint256",
      },
    ],
    name: "stringifyIntSet",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61056f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80635119ce4b14610045578063c821f2ef1461006f575b600080fd5b610058610053366004610356565b61008f565b60405160ff90911681526020015b60405180910390f35b61008261007d36600461039b565b6100f7565b6040516100669190610419565b6000818351116100d55760405162461bcd60e51b815260206004820152600c60248201526b4f7574206f662072616e676560a01b60448201526064015b60405180910390fd5b8282815181106100e7576100e761044c565b016020015160f81c905092915050565b6060806101048385610478565b855110156101435760405162461bcd60e51b815260206004820152600c60248201526b4f7574206f662072616e676560a01b60448201526064016100cc565b835b61014f8486610478565b8110156101a1578161016c610164888461008f565b60ff166101aa565b60405160200161017d929190610490565b60405160208183030381529060405291508080610199906104cb565b915050610145565b50949350505050565b6060816000036101d15750506040805180820190915260018152600360fc1b602082015290565b8160005b81156101fb57806101e5816104cb565b91506101f49050600a836104fa565b91506101d5565b60008167ffffffffffffffff811115610216576102166102b3565b6040519080825280601f01601f191660200182016040528015610240576020820181803683370190505b5090505b84156102ab5761025560018361050e565b9150610262600a86610525565b61026d906030610478565b60f81b8183815181106102825761028261044c565b60200101906001600160f81b031916908160001a9053506102a4600a866104fa565b9450610244565b949350505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126102da57600080fd5b813567ffffffffffffffff808211156102f5576102f56102b3565b604051601f8301601f19908116603f0116810190828211818310171561031d5761031d6102b3565b8160405283815286602085880101111561033657600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561036957600080fd5b823567ffffffffffffffff81111561038057600080fd5b61038c858286016102c9565b95602094909401359450505050565b6000806000606084860312156103b057600080fd5b833567ffffffffffffffff8111156103c757600080fd5b6103d3868287016102c9565b9660208601359650604090950135949350505050565b60005b838110156104045781810151838201526020016103ec565b83811115610413576000848401525b50505050565b60208152600082518060208401526104388160408501602087016103e9565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561048b5761048b610462565b500190565b600083516104a28184602088016103e9565b8351908301906104b68183602088016103e9565b600160fd1b9101908152600101949350505050565b6000600182016104dd576104dd610462565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610509576105096104e4565b500490565b60008282101561052057610520610462565b500390565b600082610534576105346104e4565b50069056fea2646970667358221220d4aa8d1ac7d1e770498d0ce7837109360e4bebbdb32710af550115e59e6a20dc64736f6c634300080f0033";

type SvgConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SvgConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Svg__factory extends ContractFactory {
  constructor(...args: SvgConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Svg";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Svg> {
    return super.deploy(overrides || {}) as Promise<Svg>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Svg {
    return super.attach(address) as Svg;
  }
  connect(signer: Signer): Svg__factory {
    return super.connect(signer) as Svg__factory;
  }
  static readonly contractName: "Svg";
  public readonly contractName: "Svg";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SvgInterface {
    return new utils.Interface(_abi) as SvgInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Svg {
    return new Contract(address, _abi, signerOrProvider) as Svg;
  }
}
