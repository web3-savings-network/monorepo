/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PixelPooly, PixelPoolyInterface } from "../PixelPooly";

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
        internalType: "address",
        name: "erc721Storage",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyMinted",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMinted",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsafeRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongFrom",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
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
        indexed: false,
        internalType: "address",
        name: "erc721Storage",
        type: "address",
      },
    ],
    name: "ERC721StorageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownerCandidate",
        type: "address",
      },
    ],
    name: "OwnerUpdateInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_BURNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "position",
        type: "uint8[]",
      },
      {
        internalType: "uint8[]",
        name: "slot",
        type: "uint8[]",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "slot",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
    ],
    name: "equip",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "getERC721Storage",
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
    name: "getLicenseName",
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
    name: "getLicenseURI",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    name: "licenseVersion",
    outputs: [
      {
        internalType: "enum LicenseVersion",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "preview",
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
    name: "renounceOwner",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
        name: "id",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
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
        internalType: "address",
        name: "erc721Storage",
        type: "address",
      },
    ],
    name: "setStorage",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    name: "totalSupply",
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
        name: "id",
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
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002902380380620029028339810160408190526200003491620001c8565b600383838333838360006200004a8382620002e4565b506001620000598282620002e4565b5050600680546001600160a01b0319166001600160a01b0384169081179091556040519091506000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600980546001600160a01b0319166001600160a01b03929092169190911790555050600b805482919060ff19166001836005811115620000ec57620000ec620003b0565b021790555050505050620003c6565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200012357600080fd5b81516001600160401b0380821115620001405762000140620000fb565b604051601f8301601f19908116603f011681019082821181831017156200016b576200016b620000fb565b816040528381526020925086838588010111156200018857600080fd5b600091505b83821015620001ac57858201830151818301840152908201906200018d565b83821115620001be5760008385830101525b9695505050505050565b600080600060608486031215620001de57600080fd5b83516001600160401b0380821115620001f657600080fd5b620002048783880162000111565b945060208601519150808211156200021b57600080fd5b506200022a8682870162000111565b604086015190935090506001600160a01b03811681146200024a57600080fd5b809150509250925092565b600181811c908216806200026a57607f821691505b6020821081036200028b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002df57600081815260208120601f850160051c81016020861015620002ba5750805b601f850160051c820191505b81811015620002db57828155600101620002c6565b5050505b505050565b81516001600160401b03811115620003005762000300620000fb565b620003188162000311845462000255565b8462000291565b602080601f831160018114620003505760008415620003375750858301515b600019600386901b1c1916600185901b178555620002db565b600085815260208120601f198616915b82811015620003815788860151825594840194600190910190840162000360565b5085821015620003a05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052602160045260246000fd5b61252c80620003d66000396000f3fe60806040526004361061020f5760003560e01c806372c3286011610118578063a341793b116100a0578063c87b56dd1161006f578063c87b56dd146105fa578063d547741f1461061a578063e8a3d4851461063a578063e985e9c51461064f578063f2fde38b1461068a57600080fd5b8063a341793b146105a8578063b88d4fde146105bd578063bd9b6d86146105dd578063c7db2893146105e557600080fd5b80639137c1a7116100e75780639137c1a71461051e57806391d148541461053e57806395d89b411461055e578063a217fddf14610573578063a22cb4651461058857600080fd5b806372c328601461048c57806387a89ee6146104c05780638a0eb349146104de5780638da5cb5b146104fe57600080fd5b80632f2ff15d1161019b57806350a5292f1161016a57806350a5292f146103f25780636352211e14610419578063637a8b22146104395780636a6278421461044c57806370a082311461046c57600080fd5b80632f2ff15d1461037257806336568abe1461039257806342842e0e146103b257806342966c68146103d257600080fd5b806313a69df9116101e257806313a69df9146102db57806318160ddd146102fb57806323b872dd1461031a578063248a9ca31461033a57806328c23a451461036a57600080fd5b806301ffc9a71461021457806306fdde0314610249578063081812fc1461026b578063095ea7b3146102b9575b600080fd5b34801561022057600080fd5b5061023461022f366004611d31565b61069d565b60405190151581526020015b60405180910390f35b34801561025557600080fd5b5061025e6106ae565b6040516102409190611daa565b34801561027757600080fd5b506102a1610286366004611dbd565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610240565b3480156102c557600080fd5b506102d96102d4366004611deb565b61073c565b005b3480156102e757600080fd5b5061025e6102f6366004611e17565b610802565b34801561030757600080fd5b506008545b604051908152602001610240565b34801561032657600080fd5b506102d9610335366004611e34565b610971565b34801561034657600080fd5b5061030c610355366004611dbd565b6000908152600a602052604090206001015490565b6102d9610adf565b34801561037e57600080fd5b506102d961038d366004611e75565b610b48565b34801561039e57600080fd5b506102d96103ad366004611e75565b610b72565b3480156103be57600080fd5b506102d96103cd366004611e34565b610bf5565b3480156103de57600080fd5b506102d96103ed366004611dbd565b610cc3565b3480156103fe57600080fd5b50600b5461040c9060ff1681565b6040516102409190611ebb565b34801561042557600080fd5b506102a1610434366004611dbd565b610d3d565b6102d9610447366004611f2f565b610d63565b34801561045857600080fd5b5061030c610467366004611e17565b610d77565b34801561047857600080fd5b5061030c610487366004611e17565b610e08565b34801561049857600080fd5b5061030c7fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b381565b3480156104cc57600080fd5b506009546001600160a01b03166102a1565b3480156104ea57600080fd5b506102d96104f9366004611fba565b610e4d565b34801561050a57600080fd5b506006546102a1906001600160a01b031681565b34801561052a57600080fd5b506102d9610539366004611e17565b610f2a565b34801561054a57600080fd5b50610234610559366004611e75565b610fa8565b34801561056a57600080fd5b5061025e610fd3565b34801561057f57600080fd5b5061030c600081565b34801561059457600080fd5b506102d96105a3366004611ff6565b610fe0565b3480156105b457600080fd5b5061025e61104c565b3480156105c957600080fd5b506102d96105d8366004612029565b611063565b6102d9611126565b3480156105f157600080fd5b5061025e6111fe565b34801561060657600080fd5b5061025e610615366004611dbd565b61125e565b34801561062657600080fd5b506102d9610635366004611e75565b6112f1565b34801561064657600080fd5b5061025e611316565b34801561065b57600080fd5b5061023461066a3660046120c8565b600560209081526000928352604080842090915290825290205460ff1681565b6102d9610698366004611e17565b611388565b60006106a8826113fe565b92915050565b600080546106bb906120f6565b80601f01602080910402602001604051908101604052809291908181526020018280546106e7906120f6565b80156107345780601f1061070957610100808354040283529160200191610734565b820191906000526020600020905b81548152906001019060200180831161071757829003601f168201915b505050505081565b6000818152600260205260409020546001600160a01b031633811480159061078857506001600160a01b038116600090815260056020908152604080832033845290915290205460ff16155b156107a65760405163fe822d7b60e01b815260040160405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6009546040516374158a3160e11b81526000600482018190526001600160a01b038481166024840152606093919291169063e82b146290604401600060405180830381865afa158015610859573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261088191908101906121ba565b9050600960009054906101000a90046001600160a01b03166001600160a01b0316639a17092a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190612203565b6001600160a01b031663316df61e826040518263ffffffff1660e01b81526004016109259190611daa565b600060405180830381865afa158015610942573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261096a91908101906121ba565b9392505050565b6000818152600260205260409020546001600160a01b038481169116146109ab5760405163c6de3f2560e01b815260040160405180910390fd5b6001600160a01b0382166109d257604051634e46966960e11b815260040160405180910390fd5b336001600160a01b03841614801590610a0f57506001600160a01b038316600090815260056020908152604080832033845290915290205460ff16155b8015610a3257506000818152600460205260409020546001600160a01b03163314155b15610a505760405163fe822d7b60e01b815260040160405180910390fd5b6001600160a01b0380841660008181526003602090815260408083208054600019019055938616808352848320805460010190558583526002825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b03163314610b09576040516282b42960e81b815260040160405180910390fd5b600680546001600160a01b031916905560405160009033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3565b6000828152600a6020526040902060010154610b6381611423565b610b6d838361142d565b505050565b6001600160a01b0381163314610be75760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b610bf182826114b3565b5050565b610c00838383610971565b6001600160a01b0382163b15610b6d57604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a4016020604051808303816000875af1158015610c77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9b9190612220565b6001600160e01b03191614610b6d57604051633da6393160e01b815260040160405180910390fd5b610ced7fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b333610fa8565b610d315760405162461bcd60e51b815260206004820152601560248201527415d9588cd0d85c990e9d5b985d5d1a1bdc9a5e9959605a1b6044820152606401610bde565b610d3a8161151a565b50565b6000818152600260205260408120546001600160a01b0316806106a85750600092915050565b610d6f848484846115cb565b505050505050565b6000610da37fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b333610fa8565b610de75760405162461bcd60e51b815260206004820152601560248201527415d9588cd0d85c990e9d5b985d5d1a1bdc9a5e9959605a1b6044820152606401610bde565b6008805460009182610df883612253565b9190505590506106a883826116a5565b60006001600160a01b038216610e315760405163d92e233d60e01b815260040160405180910390fd5b506001600160a01b031660009081526003602052604090205490565b610e5683610d3d565b6001600160a01b0316336001600160a01b031614610eb65760405162461bcd60e51b815260206004820152601760248201527f506978656c506f6f6c793a756e617574686f72697a65640000000000000000006044820152606401610bde565b600954604051634711b57960e11b81526004810185905260ff8085166024830152831660448201526001600160a01b0390911690638e236af290606401600060405180830381600087803b158015610f0d57600080fd5b505af1158015610f21573d6000803e3d6000fd5b50505050505050565b6006546001600160a01b03163314610f54576040516282b42960e81b815260040160405180910390fd5b600980546001600160a01b0319166001600160a01b0383169081179091556040519081527fd833c7cea3bce2562e201bf7e85016d0bc1173580c719f63378cc5d0457552b69060200160405180910390a150565b6000918252600a602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600180546106bb906120f6565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600b5460609061105e9060ff1661176d565b905090565b61106e858585610971565b6001600160a01b0384163b1561111f57604051630a85bd0160e11b808252906001600160a01b0386169063150b7a02906110b49033908a9089908990899060040161226c565b6020604051808303816000875af11580156110d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f79190612220565b6001600160e01b0319161461111f57604051633da6393160e01b815260040160405180910390fd5b5050505050565b600754600160a01b900460ff16156111bf576006546001600160a01b03163314611162576040516282b42960e81b815260040160405180910390fd5b6007805460ff60a01b198116909155600680546001600160a01b0319166001600160a01b039092169182179055604051819033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546001600160a01b031633146111e9576040516282b42960e81b815260040160405180910390fd5b6007805460ff60a01b1916600160a01b179055565b60606040518060600160405280603181526020016124c660319139600b546112399060ff16600581111561123457611234611ea5565b6118eb565b60405160200161124a9291906122c0565b604051602081830303815290604052905090565b606060008061126c846119ec565b600954604051637833cb0b60e11b81529294509092506001600160a01b03169063f0679616906112a4908790869086906004016122ef565b600060405180830381865afa1580156112c1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112e991908101906121ba565b949350505050565b6000828152600a602052604090206001015461130c81611423565b610b6d83836114b3565b60095460408051631c97e82760e21b815290516060926001600160a01b03169163725fa09c9160048083019260009291908290030181865afa158015611360573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261105e91908101906121ba565b6006546001600160a01b031633146113b2576040516282b42960e81b815260040160405180910390fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907f365e8eca24e61548e99db9d948e4f9cf79224bcbf4fc81afe651e6e80921c87590600090a350565b60006001600160e01b03198216630c934a3560e31b14806106a857506106a882611ae6565b610d3a8133611b1b565b6114378282610fa8565b610bf1576000828152600a602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561146f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6114bd8282610fa8565b15610bf1576000828152600a602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000818152600260205260409020546001600160a01b03168061155057604051634d5e5fb360e01b815260040160405180910390fd5b6001600160a01b038116600081815260036020908152604080832080546000190190558583526002825280832080546001600160a01b031990811690915560049092528083208054909216909155518492907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6009546040805163309c8bb360e21b815290516000926001600160a01b03169163c2722ecc9160048083019260209291908290030181865afa158015611615573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116399190612203565b6001600160a01b031663cbe82de034878787876040518663ffffffff1660e01b815260040161166b9493929190612365565b6000604051808303818588803b15801561168457600080fd5b505af1158015611698573d6000803e3d6000fd5b5050505050949350505050565b6001600160a01b0382166116cc57604051634e46966960e11b815260040160405180910390fd5b6000818152600260205260409020546001600160a01b03161561170257604051631bbdf5c560e31b815260040160405180910390fd5b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6060600682600581111561178357611783611ea5565b60ff16111561179157600080fd5b8160058111156117a3576117a3611ea5565b6000036117cd57505060408051808201909152600781526604342455f4343360cc1b602082015290565b8160058111156117df576117df611ea5565b60010361180957505060408051808201909152600781526621a122afa2a1a960c91b602082015290565b81600581111561181b5761181b611ea5565b60020361184657505060408051808201909152600881526721a122afa722a1a960c11b602082015290565b81600581111561185857611858611ea5565b60030361188657505060408051808201909152600b81526a4342455f4e4543525f485360a81b602082015290565b81600581111561189857611898611ea5565b6004036118c157505060408051808201909152600681526521a122afa82960d11b602082015290565b50506040805180820190915260098152684342455f50525f485360b81b602082015290565b919050565b6060816000036119125750506040805180820190915260018152600360fc1b602082015290565b8160005b811561193c578061192681612253565b91506119359050600a836123ad565b9150611916565b60008167ffffffffffffffff81111561195757611957612130565b6040519080825280601f01601f191660200182016040528015611981576020820181803683370190505b5090505b84156112e9576119966001836123c1565b91506119a3600a866123d8565b6119ae9060306123ec565b60f81b8183815181106119c3576119c3612404565b60200101906001600160f81b031916908160001a9053506119e5600a866123ad565b9450611985565b600954604051630976c51760e01b81526004810183905260609182916000916001600160a01b031690630976c51790602401600060405180830381865afa158015611a3b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611a6391908101906121ba565b600954604051632d08d6b760e01b8152600481018790529192506000916001600160a01b0390911690632d08d6b790602401600060405180830381865afa158015611ab2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ada91908101906121ba565b91959194509092505050565b60006001600160e01b03198216637965db0b60e01b14806106a857506301ffc9a760e01b6001600160e01b03198316146106a8565b611b258282610fa8565b610bf157611b3d816001600160a01b03166014611b7f565b611b48836020611b7f565b604051602001611b5992919061241a565b60408051601f198184030181529082905262461bcd60e51b8252610bde91600401611daa565b60606000611b8e83600261248f565b611b999060026123ec565b67ffffffffffffffff811115611bb157611bb1612130565b6040519080825280601f01601f191660200182016040528015611bdb576020820181803683370190505b509050600360fc1b81600081518110611bf657611bf6612404565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611c2557611c25612404565b60200101906001600160f81b031916908160001a9053506000611c4984600261248f565b611c549060016123ec565b90505b6001811115611ccc576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611c8857611c88612404565b1a60f81b828281518110611c9e57611c9e612404565b60200101906001600160f81b031916908160001a90535060049490941c93611cc5816124ae565b9050611c57565b50831561096a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610bde565b6001600160e01b031981168114610d3a57600080fd5b600060208284031215611d4357600080fd5b813561096a81611d1b565b60005b83811015611d69578181015183820152602001611d51565b83811115611d78576000848401525b50505050565b60008151808452611d96816020860160208601611d4e565b601f01601f19169290920160200192915050565b60208152600061096a6020830184611d7e565b600060208284031215611dcf57600080fd5b5035919050565b6001600160a01b0381168114610d3a57600080fd5b60008060408385031215611dfe57600080fd5b8235611e0981611dd6565b946020939093013593505050565b600060208284031215611e2957600080fd5b813561096a81611dd6565b600080600060608486031215611e4957600080fd5b8335611e5481611dd6565b92506020840135611e6481611dd6565b929592945050506040919091013590565b60008060408385031215611e8857600080fd5b823591506020830135611e9a81611dd6565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b6020810160068310611edd57634e487b7160e01b600052602160045260246000fd5b91905290565b60008083601f840112611ef557600080fd5b50813567ffffffffffffffff811115611f0d57600080fd5b6020830191508360208260051b8501011115611f2857600080fd5b9250929050565b600080600080600060608688031215611f4757600080fd5b85359450602086013567ffffffffffffffff80821115611f6657600080fd5b611f7289838a01611ee3565b90965094506040880135915080821115611f8b57600080fd5b50611f9888828901611ee3565b969995985093965092949392505050565b803560ff811681146118e657600080fd5b600080600060608486031215611fcf57600080fd5b83359250611fdf60208501611fa9565b9150611fed60408501611fa9565b90509250925092565b6000806040838503121561200957600080fd5b823561201481611dd6565b915060208301358015158114611e9a57600080fd5b60008060008060006080868803121561204157600080fd5b853561204c81611dd6565b9450602086013561205c81611dd6565b935060408601359250606086013567ffffffffffffffff8082111561208057600080fd5b818801915088601f83011261209457600080fd5b8135818111156120a357600080fd5b8960208285010111156120b557600080fd5b9699959850939650602001949392505050565b600080604083850312156120db57600080fd5b82356120e681611dd6565b91506020830135611e9a81611dd6565b600181811c9082168061210a57607f821691505b60208210810361212a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561216157612161612130565b604051601f8501601f19908116603f0116810190828211818310171561218957612189612130565b816040528093508581528686860111156121a257600080fd5b6121b0866020830187611d4e565b5050509392505050565b6000602082840312156121cc57600080fd5b815167ffffffffffffffff8111156121e357600080fd5b8201601f810184136121f457600080fd5b6112e984825160208401612146565b60006020828403121561221557600080fd5b815161096a81611dd6565b60006020828403121561223257600080fd5b815161096a81611d1b565b634e487b7160e01b600052601160045260246000fd5b6000600182016122655761226561223d565b5060010190565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a0840137600060a0848401015260a0601f19601f85011683010190509695505050505050565b600083516122d2818460208801611d4e565b8351908301906122e6818360208801611d4e565b01949350505050565b8381526060602082015260006123086060830185611d7e565b828103604084015261231a8185611d7e565b9695505050505050565b8183526000602080850194508260005b8581101561235a5760ff61234783611fa9565b1687529582019590820190600101612334565b509495945050505050565b604081526000612379604083018688612324565b828103602084015261238c818587612324565b979650505050505050565b634e487b7160e01b600052601260045260246000fd5b6000826123bc576123bc612397565b500490565b6000828210156123d3576123d361223d565b500390565b6000826123e7576123e7612397565b500690565b600082198211156123ff576123ff61223d565b500190565b634e487b7160e01b600052603260045260246000fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612452816017850160208801611d4e565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612483816028840160208801611d4e565b01602801949350505050565b60008160001904831182151516156124a9576124a961223d565b500290565b6000816124bd576124bd61223d565b50600019019056fe61723a2f2f5f44396b4e3157724e576243713535425341475262544234625333763851415054596d42546853625833412fa26469706673582212204930d02ef4baf5efb2381c55328a52da434c4391f72f749af2f77cd8e8a1398164736f6c634300080f0033";

type PixelPoolyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelPoolyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PixelPooly__factory extends ContractFactory {
  constructor(...args: PixelPoolyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PixelPooly";
  }

  deploy(
    name: string,
    symbol: string,
    erc721Storage: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PixelPooly> {
    return super.deploy(
      name,
      symbol,
      erc721Storage,
      overrides || {}
    ) as Promise<PixelPooly>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    erc721Storage: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      erc721Storage,
      overrides || {}
    );
  }
  attach(address: string): PixelPooly {
    return super.attach(address) as PixelPooly;
  }
  connect(signer: Signer): PixelPooly__factory {
    return super.connect(signer) as PixelPooly__factory;
  }
  static readonly contractName: "PixelPooly";
  public readonly contractName: "PixelPooly";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PixelPoolyInterface {
    return new utils.Interface(_abi) as PixelPoolyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PixelPooly {
    return new Contract(address, _abi, signerOrProvider) as PixelPooly;
  }
}