/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDataStream, IDataStreamInterface } from "../IDataStream";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDataStream__factory {
  static readonly abi = _abi;
  static createInterface(): IDataStreamInterface {
    return new utils.Interface(_abi) as IDataStreamInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDataStream {
    return new Contract(address, _abi, signerOrProvider) as IDataStream;
  }
}
