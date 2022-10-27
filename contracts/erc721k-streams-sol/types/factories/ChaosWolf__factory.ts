/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChaosWolf, ChaosWolfInterface } from "../ChaosWolf";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        internalType: "struct ChaosWolf.ContractURI",
        name: "contractURI",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "externalLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerFeeBasisPoints",
            type: "string",
          },
          {
            internalType: "string",
            name: "feeRecipient",
            type: "string",
          },
        ],
        internalType: "struct ChaosWolf.ContractURI",
        name: "contractURI",
        type: "tuple",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
    ],
    name: "setImageURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200233d3803806200233d8339810160408190526200003491620003f1565b8484600062000044838262000641565b50600162000053828262000641565b505050620000706200006a6200012460201b60201c565b62000128565b82518390600890819062000085908262000641565b50602082015160018201906200009c908262000641565b5060408201516002820190620000b3908262000641565b5060608201516003820190620000ca908262000641565b5060808201516004820190620000e1908262000641565b5060a08201516005820190620000f8908262000641565b50600791506200010b9050838262000641565b50620001198160006200017a565b505050505062000734565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001d65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b6000818152600260205260409020546001600160a01b0316156200023d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401620001cd565b6001600160a01b0382166000908152600360205260408120805460019290620002689084906200070d565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b505050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620003065762000306620002cb565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620003375762000337620002cb565b604052919050565b600082601f8301126200035157600080fd5b81516001600160401b038111156200036d576200036d620002cb565b602062000383601f8301601f191682016200030c565b82815285828487010111156200039857600080fd5b60005b83811015620003b85785810183015182820184015282016200039b565b83811115620003ca5760008385840101525b5095945050505050565b80516001600160a01b0381168114620003ec57600080fd5b919050565b600080600080600060a086880312156200040a57600080fd5b85516001600160401b03808211156200042257600080fd5b6200043089838a016200033f565b965060208801519150808211156200044757600080fd5b6200045589838a016200033f565b955060408801519150808211156200046c57600080fd5b9087019060c0828a0312156200048157600080fd5b6200048b620002e1565b8251828111156200049b57600080fd5b620004a98b8286016200033f565b825250602083015182811115620004bf57600080fd5b620004cd8b8286016200033f565b602083015250604083015182811115620004e657600080fd5b620004f48b8286016200033f565b6040830152506060830151828111156200050d57600080fd5b6200051b8b8286016200033f565b6060830152506080830151828111156200053457600080fd5b620005428b8286016200033f565b60808301525060a0830151828111156200055b57600080fd5b620005698b8286016200033f565b60a08301525060608901519095509150808211156200058757600080fd5b5062000596888289016200033f565b925050620005a760808701620003d4565b90509295509295909350565b600181811c90821680620005c857607f821691505b602082108103620005e957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c657600081815260208120601f850160051c81016020861015620006185750805b601f850160051c820191505b81811015620006395782815560010162000624565b505050505050565b81516001600160401b038111156200065d576200065d620002cb565b62000675816200066e8454620005b3565b84620005ef565b602080601f831160018114620006ad5760008415620006945750858301515b600019600386901b1c1916600185901b17855562000639565b600085815260208120601f198616915b82811015620006de57888601518255948401946001909101908401620006bd565b5085821015620006fd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200072f57634e487b7160e01b600052601160045260246000fd5b500190565b611bf980620007446000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde1461026a578063c87b56dd1461027d578063e8a3d48514610290578063e985e9c514610298578063f2fde38b146102d457600080fd5b8063715018a61461022e57806386d1a69f146102365780638da5cb5b1461023e57806395d89b411461024f578063a22cb4651461025757600080fd5b806323b872dd116100f457806323b872dd146101c157806342842e0e146101d457806357e30f44146101e75780636352211e146101fa57806370a082311461020d57600080fd5b806301ffc9a71461013157806304787ca21461015957806306fdde031461016e578063081812fc14610183578063095ea7b3146101ae575b600080fd5b61014461013f36600461107c565b6102e7565b60405190151581526020015b60405180910390f35b61016c610167366004611175565b610339565b005b610176610349565b6040516101509190611202565b610196610191366004611215565b6103db565b6040516001600160a01b039091168152602001610150565b61016c6101bc36600461124a565b610475565b61016c6101cf366004611274565b61058a565b61016c6101e2366004611274565b6105bb565b61016c6101f53660046112b0565b6105d6565b610196610208366004611215565b610658565b61022061021b3660046113d1565b6106cf565b604051908152602001610150565b61016c610756565b61016c61078c565b6006546001600160a01b0316610196565b6101766107b9565b61016c6102653660046113ec565b6107c8565b61016c610278366004611428565b6107d3565b61017661028b366004611215565b610805565b610176610899565b6101446102a63660046114a4565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61016c6102e23660046113d1565b6108e5565b60006001600160e01b031982166380ac58cd60e01b148061031857506001600160e01b03198216635b5e139f60e01b145b8061033357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6007610345828261155f565b5050565b606060008054610358906114d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610384906114d7565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104595760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061048082610658565b9050806001600160a01b0316836001600160a01b0316036104ed5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610450565b336001600160a01b0382161480610509575061050981336102a6565b61057b5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610450565b6105858383610980565b505050565b61059433826109ee565b6105b05760405162461bcd60e51b81526004016104509061161f565b610585838383610ae5565b610585838383604051806020016040528060008152506107d3565b8051819060089081906105e9908261155f565b50602082015160018201906105fe908261155f565b5060408201516002820190610613908261155f565b5060608201516003820190610628908261155f565b506080820151600482019061063d908261155f565b5060a08201516005820190610652908261155f565b50505050565b6000818152600260205260408120546001600160a01b0316806103335760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610450565b60006001600160a01b03821661073a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610450565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b031633146107805760405162461bcd60e51b815260040161045090611670565b61078a6000610c81565b565b6006546001600160a01b031633146107b65760405162461bcd60e51b815260040161045090611670565b33ff5b606060018054610358906114d7565b610345338383610cd3565b6107dd33836109ee565b6107f95760405162461bcd60e51b81526004016104509061161f565b61065284848484610da1565b6060610873600761084e604051806040016040528060048152602001637061636b60e01b815250604051806040016040528060048152602001637472756560e01b815250610dd4565b60405160200161085f929190611734565b604051602081830303815290604052610e00565b604051602001610883919061181f565b6040516020818303038152906040529050919050565b6040516060906108c19061085f90600890600990600a90600b90600c90600d90602001611864565b6040516020016108d1919061181f565b604051602081830303815290604052905090565b6006546001600160a01b0316331461090f5760405162461bcd60e51b815260040161045090611670565b6001600160a01b0381166109745760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610450565b61097d81610c81565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109b582610658565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a675760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610450565b6000610a7283610658565b9050806001600160a01b0316846001600160a01b03161480610ab957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610add5750836001600160a01b0316610ad2846103db565b6001600160a01b0316145b949350505050565b826001600160a01b0316610af882610658565b6001600160a01b031614610b5c5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610450565b6001600160a01b038216610bbe5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610450565b610bc9600082610980565b6001600160a01b0383166000908152600360205260408120805460019290610bf29084906119e4565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c209084906119fb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610d345760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610450565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610dac848484610ae5565b610db884848484610f65565b6106525760405162461bcd60e51b815260040161045090611a13565b60608282604051602001610de9929190611a65565b604051602081830303815290604052905092915050565b60608151600003610e1f57505060408051602081019091526000815290565b6000604051806060016040528060408152602001611b846040913990506000600384516002610e4e91906119fb565b610e589190611ae8565b610e63906004611b0a565b90506000610e728260206119fb565b67ffffffffffffffff811115610e8a57610e8a6110a0565b6040519080825280601f01601f191660200182016040528015610eb4576020820181803683370190505b509050818152600183018586518101602084015b81831015610f20576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825350600101610ec8565b600389510660018114610f3a5760028114610f4b57610f57565b613d3d60f01b600119830152610f57565b603d60f81b6000198301525b509398975050505050505050565b60006001600160a01b0384163b1561105b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fa9903390899088908890600401611b29565b6020604051808303816000875af1925050508015610fe4575060408051601f3d908101601f19168201909252610fe191810190611b66565b60015b611041573d808015611012576040519150601f19603f3d011682016040523d82523d6000602084013e611017565b606091505b5080516000036110395760405162461bcd60e51b815260040161045090611a13565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610add565b506001949350505050565b6001600160e01b03198116811461097d57600080fd5b60006020828403121561108e57600080fd5b813561109981611066565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156110d9576110d96110a0565b60405290565b600067ffffffffffffffff808411156110fa576110fa6110a0565b604051601f8501601f19908116603f01168101908282118183101715611122576111226110a0565b8160405280935085815286868601111561113b57600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261116657600080fd5b611099838335602085016110df565b60006020828403121561118757600080fd5b813567ffffffffffffffff81111561119e57600080fd5b610add84828501611155565b60005b838110156111c55781810151838201526020016111ad565b838111156106525750506000910152565b600081518084526111ee8160208601602086016111aa565b601f01601f19169290920160200192915050565b60208152600061109960208301846111d6565b60006020828403121561122757600080fd5b5035919050565b80356001600160a01b038116811461124557600080fd5b919050565b6000806040838503121561125d57600080fd5b6112668361122e565b946020939093013593505050565b60008060006060848603121561128957600080fd5b6112928461122e565b92506112a06020850161122e565b9150604084013590509250925092565b6000602082840312156112c257600080fd5b813567ffffffffffffffff808211156112da57600080fd5b9083019060c082860312156112ee57600080fd5b6112f66110b6565b82358281111561130557600080fd5b61131187828601611155565b82525060208301358281111561132657600080fd5b61133287828601611155565b60208301525060408301358281111561134a57600080fd5b61135687828601611155565b60408301525060608301358281111561136e57600080fd5b61137a87828601611155565b60608301525060808301358281111561139257600080fd5b61139e87828601611155565b60808301525060a0830135828111156113b657600080fd5b6113c287828601611155565b60a08301525095945050505050565b6000602082840312156113e357600080fd5b6110998261122e565b600080604083850312156113ff57600080fd5b6114088361122e565b91506020830135801515811461141d57600080fd5b809150509250929050565b6000806000806080858703121561143e57600080fd5b6114478561122e565b93506114556020860161122e565b925060408501359150606085013567ffffffffffffffff81111561147857600080fd5b8501601f8101871361148957600080fd5b611498878235602084016110df565b91505092959194509250565b600080604083850312156114b757600080fd5b6114c08361122e565b91506114ce6020840161122e565b90509250929050565b600181811c908216806114eb57607f821691505b60208210810361150b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561058557600081815260208120601f850160051c810160208610156115385750805b601f850160051c820191505b8181101561155757828155600101611544565b505050505050565b815167ffffffffffffffff811115611579576115796110a0565b61158d8161158784546114d7565b84611511565b602080601f8311600181146115c257600084156115aa5750858301515b600019600386901b1c1916600185901b178555611557565b600085815260208120601f198616915b828110156115f1578886015182559484019460019091019084016115d2565b508582101561160f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600081546116b2816114d7565b600182811680156116ca57600181146116df5761170e565b60ff198416875282151583028701945061170e565b8560005260208060002060005b858110156117055781548a8201529084019082016116ec565b50505082870194505b5050505092915050565b6000815161172a8185602086016111aa565b9290920192915050565b673d913730b6b2911d60c11b8152601160f91b6008820152632bb7b63360e11b600982015261088b60f21b600d8201526d113232b9b1b934b83a34b7b7111d60911b600f820152601160f91b601d820152712ab73632b0b9b4103a34329031b430b7b99760711b601e82015261088b60f21b6030820152671134b6b0b3b2911d60c11b6032820152601160f91b603a82015260006117d5603b8301856116a5565b61088b60f21b81526e2261747472696275746573223a205b60881b60028201526118026011820185611718565b605d60f81b8152607d60f81b600182015260020195945050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161185781601d8501602087016111aa565b91909101601d0192915050565b673d913730b6b2911d60c11b8152601160f91b6008820152600061188b60098301896116a5565b61088b60f21b815260026118b18183016d113232b9b1b934b83a34b7b7111d60911b9052565b601160f91b60108301526118c8601183018a6116a5565b61088b60f21b81529150671134b6b0b3b2911d60c11b82820152601160f91b600a8301526118f9600b8301896116a5565b61088b60f21b815291506e1132bc3a32b93730b62634b735911d60891b82820152601160f91b601183015261193160128301886116a5565b61088b60f21b815291507f2273656c6c65724665654261736973506f696e7473223a00000000000000000082820152601160f91b6019830152611977601a8301876116a5565b61088b60f21b815291506e113332b2a932b1b4b834b2b73a111d60891b82820152601160f91b60118301526119af60128301866116a5565b601160f91b8152607d60f81b6001820152019998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156119f6576119f66119ce565b500390565b60008219821115611a0e57611a0e6119ce565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6e3d913a3930b4ba2fba3cb832911d1160891b81528251600090611a9081600f8501602088016111aa565b61088b60f21b600f9184019182015267113b30b63ab2911d60c11b6011820152601160f91b60198201528351611acd81601a8401602088016111aa565b61227d60f01b601a9290910191820152601c01949350505050565b600082611b0557634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611b2457611b246119ce565b500290565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b5c908301846111d6565b9695505050505050565b600060208284031215611b7857600080fd5b81516110998161106656fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212203c02991699674702d865b0204988204558ad3175e1827790e55c4d49eaeef90064736f6c634300080f0033";

type ChaosWolfConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChaosWolfConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChaosWolf__factory extends ContractFactory {
  constructor(...args: ChaosWolfConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ChaosWolf";
  }

  deploy(
    name: string,
    symbol: string,
    contractURI: ChaosWolf.ContractURIStruct,
    imageURI: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChaosWolf> {
    return super.deploy(
      name,
      symbol,
      contractURI,
      imageURI,
      _owner,
      overrides || {}
    ) as Promise<ChaosWolf>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    contractURI: ChaosWolf.ContractURIStruct,
    imageURI: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      contractURI,
      imageURI,
      _owner,
      overrides || {}
    );
  }
  attach(address: string): ChaosWolf {
    return super.attach(address) as ChaosWolf;
  }
  connect(signer: Signer): ChaosWolf__factory {
    return super.connect(signer) as ChaosWolf__factory;
  }
  static readonly contractName: "ChaosWolf";
  public readonly contractName: "ChaosWolf";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChaosWolfInterface {
    return new utils.Interface(_abi) as ChaosWolfInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChaosWolf {
    return new Contract(address, _abi, signerOrProvider) as ChaosWolf;
  }
}
