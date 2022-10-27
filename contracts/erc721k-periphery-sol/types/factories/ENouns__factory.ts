/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ENouns, ENounsInterface } from "../ENouns";

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
      {
        internalType: "address",
        name: "ensReverseRecords",
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
        indexed: false,
        internalType: "address",
        name: "ensReverseRecords",
        type: "address",
      },
    ],
    name: "EnsReverseRecordsUpdated",
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
    name: "claim",
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
    name: "getEnsReverseRecords",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getId",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
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
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "previewUsingEnsName",
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
        internalType: "address",
        name: "_ensReverseRecords",
        type: "address",
      },
    ],
    name: "setEnsReverseRecords",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002699380380620026998339810160408190526200003491620001ef565b838383828260006200004783826200030d565b5060016200005682826200030d565b505050620000736200006d620000af60201b60201c565b620000b3565b600880546001600160a01b039283166001600160a01b031991821617909155600980549590921694169390931790925550620003d99350505050565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200012d57600080fd5b81516001600160401b03808211156200014a576200014a62000105565b604051601f8301601f19908116603f0116810190828211818310171562000175576200017562000105565b816040528381526020925086838588010111156200019257600080fd5b600091505b83821015620001b6578582018301518183018401529082019062000197565b83821115620001c85760008385830101525b9695505050505050565b80516001600160a01b0381168114620001ea57600080fd5b919050565b600080600080608085870312156200020657600080fd5b84516001600160401b03808211156200021e57600080fd5b6200022c888389016200011b565b955060208701519150808211156200024357600080fd5b5062000252878288016200011b565b9350506200026360408601620001d2565b91506200027360608601620001d2565b905092959194509250565b600181811c908216806200029357607f821691505b602082108103620002b457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030857600081815260208120601f850160051c81016020861015620002e35750805b601f850160051c820191505b818110156200030457828155600101620002ef565b5050505b505050565b81516001600160401b0381111562000329576200032962000105565b62000341816200033a84546200027e565b84620002ba565b602080601f831160018114620003795760008415620003605750858301515b600019600386901b1c1916600185901b17855562000304565b600085815260208120601f198616915b82811015620003aa5788860151825594840194600190910190840162000389565b5085821015620003c95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6122b080620003e96000396000f3fe6080604052600436106101bb5760003560e01c806365f68c89116100ec578063a22cb4651161008a578063c87b56dd11610064578063c87b56dd146104e0578063e8a3d48514610500578063e985e9c514610515578063f2fde38b1461055e57600080fd5b8063a22cb46514610482578063b88d4fde146104a2578063bb636388146104c257600080fd5b806387a89ee6116100c657806387a89ee6146104115780638da5cb5b1461042f5780639137c1a71461044d57806395d89b411461046d57600080fd5b806365f68c89146103a657806370a08231146103dc578063715018a6146103fc57600080fd5b80632e1a7d4d116101595780634e71d92d116101335780634e71d92d1461033e5780634f53c4e2146103465780635ad0ca9d146103665780636352211e1461038657600080fd5b80632e1a7d4d146102de5780632f54bf6e146102fe57806342842e0e1461031e57600080fd5b8063095ea7b311610195578063095ea7b31461025f57806313a69df91461027f57806318160ddd1461029f57806323b872dd146102be57600080fd5b806301ffc9a7146101d057806306fdde0314610205578063081812fc1461022757600080fd5b366101cb576101c93361057e565b005b600080fd5b3480156101dc57600080fd5b506101f06101eb366004611bf0565b6105ed565b60405190151581526020015b60405180910390f35b34801561021157600080fd5b5061021a6105fe565b6040516101fc9190611c6c565b34801561023357600080fd5b50610247610242366004611c7f565b610690565b6040516001600160a01b0390911681526020016101fc565b34801561026b57600080fd5b506101c961027a366004611cad565b610725565b34801561028b57600080fd5b5061021a61029a366004611cd9565b61083a565b3480156102ab57600080fd5b506007545b6040519081526020016101fc565b3480156102ca57600080fd5b506101c96102d9366004611cf6565b610919565b3480156102ea57600080fd5b506101c96102f9366004611c7f565b6109a3565b34801561030a57600080fd5b506101f0610319366004611cd9565b610a54565b34801561032a57600080fd5b506101c9610339366004611cf6565b610a80565b6101c9610a9b565b34801561035257600080fd5b506101c9610361366004611cd9565b610aa6565b34801561037257600080fd5b5061021a610381366004611de4565b610b10565b34801561039257600080fd5b506102476103a1366004611c7f565b610ba9565b3480156103b257600080fd5b506102b06103c1366004611cd9565b6001600160a01b03166000908152600a602052604090205490565b3480156103e857600080fd5b506102b06103f7366004611cd9565b610c20565b34801561040857600080fd5b506101c9610ca7565b34801561041d57600080fd5b506008546001600160a01b0316610247565b34801561043b57600080fd5b506006546001600160a01b0316610247565b34801561045957600080fd5b506101c9610468366004611cd9565b610cdb565b34801561047957600080fd5b5061021a610d53565b34801561048e57600080fd5b506101c961049d366004611e2d565b610d62565b3480156104ae57600080fd5b506101c96104bd366004611e6b565b610d6d565b3480156104ce57600080fd5b506009546001600160a01b0316610247565b3480156104ec57600080fd5b5061021a6104fb366004611c7f565b610de9565b34801561050c57600080fd5b5061021a610e7c565b34801561052157600080fd5b506101f0610530366004611eeb565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561056a57600080fd5b506101c9610579366004611cd9565b610ef3565b61058781610c20565b6000036105a85760078054600101908190556105a4908290610f8b565b5050565b60405162461bcd60e51b815260206004820152601260248201527111539bdd5b9cce9c1c995d8b5a5cdcdd595960721b60448201526064015b60405180910390fd5b50565b60006105f8826110a4565b92915050565b60606000805461060d90611f19565b80601f016020809104026020016040519081016040528092919081815260200182805461063990611f19565b80156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166107095760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105e1565b506000908152600460205260409020546001600160a01b031690565b600061073082610ba9565b9050806001600160a01b0316836001600160a01b03160361079d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105e1565b336001600160a01b03821614806107b957506107b98133610530565b61082b5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105e1565b61083583836110f4565b505050565b60085460408051634d0b849560e11b815290516060926001600160a01b031691639a17092a9160048083019260209291908290030181865afa158015610884573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a89190611f53565b6040516315084f9960e31b81526001600160a01b038481166004830152919091169063a8427cc8906024015b600060405180830381865afa1580156108f1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105f89190810190611fb5565b6001600160a01b03831661094a576109448260076000815461093a90612000565b9182905550610f8b565b50505050565b61095382610c20565b156109985760405162461bcd60e51b815260206004820152601560248201527422a737bab7399d31bab93932b73a16b437b63232b960591b60448201526064016105e1565b610944838383611162565b6006546001600160a01b031633146109cd5760405162461bcd60e51b81526004016105e190612019565b604051600090339083908381818185875af1925050503d8060008114610a0f576040519150601f19603f3d011682016040523d82523d6000602084013e610a14565b606091505b50509050806105a45760405162461bcd60e51b815260206004820152600c60248201526b08a9cdeeadce674ead05aded60a31b60448201526064016105e1565b6001600160a01b0381166000908152600a6020526040812054610a785760006105f8565b600192915050565b61083583838360405180602001604052806000815250610d6d565b610aa43361057e565b565b6006546001600160a01b03163314610ad05760405162461bcd60e51b81526004016105e190612019565b6040516001600160a01b03821681527f848a8875b475d071d046367618487f37b45ec544f8c70982fb4917f128ee232b906020015b60405180910390a150565b60085460408051634d0b849560e11b815290516060926001600160a01b031691639a17092a9160048083019260209291908290030181865afa158015610b5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7e9190611f53565b6001600160a01b031663a53344e7836040518263ffffffff1660e01b81526004016108d49190611c6c565b6000818152600260205260408120546001600160a01b0316806105f85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105e1565b60006001600160a01b038216610c8b5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105e1565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610cd15760405162461bcd60e51b81526004016105e190612019565b610aa46000611242565b6006546001600160a01b03163314610d055760405162461bcd60e51b81526004016105e190612019565b600880546001600160a01b0319166001600160a01b0383169081179091556040519081527fd833c7cea3bce2562e201bf7e85016d0bc1173580c719f63378cc5d0457552b690602001610b05565b60606001805461060d90611f19565b6105a4338383611294565b610d773383611362565b610ddd5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6044820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b60648201526084016105e1565b61094484848484611458565b6060600080610df78461148b565b600854604051637833cb0b60e11b81529294509092506001600160a01b03169063f067961690610e2f9087908690869060040161204e565b600060405180830381865afa158015610e4c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e749190810190611fb5565b949350505050565b60085460408051631c97e82760e21b815290516060926001600160a01b03169163725fa09c9160048083019260009291908290030181865afa158015610ec6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610eee9190810190611fb5565b905090565b6006546001600160a01b03163314610f1d5760405162461bcd60e51b81526004016105e190612019565b6001600160a01b038116610f825760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e1565b6105ea81611242565b600080610f9f610f9a856114f8565b6115d6565b905080600003610ff15760405162461bcd60e51b815260206004820152601760248201527f454e6f756e733a696e76616c69642d656e732d6e6f646500000000000000000060448201526064016105e1565b6000818152600c60205260409020546001600160a01b03161561104b5760405162461bcd60e51b815260206004820152601260248201527119539bdd5b9cce9c1c995d8b5a5cdcdd595960721b60448201526064016105e1565b61105584846115e2565b6001600160a01b0384166000818152600a60209081526040808320879055868352600b8252808320859055938252600c90529190912080546001600160a01b0319169091179055508092915050565b60006001600160e01b031982166380ac58cd60e01b14806110d557506001600160e01b03198216635b5e139f60e01b145b806105f857506301ffc9a760e01b6001600160e01b03198316146105f8565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061112982610ba9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000836001600160a01b0316600c600061117e610f9a876114f8565b81526020810191909152604001600020546001600160a01b0316146111da5760405162461bcd60e51b8152602060048201526012602482015271654e6f756e733a696e76616c69642d656e7360701b60448201526064016105e1565b6000828152600b60205260409020546111f4858585611724565b6001600160a01b039485166000908152600a602090815260408083208390559590961680825285822094909455908152600c9094529190922080546001600160a01b03191690921790915590565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036112f55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105e1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000818152600260205260408120546001600160a01b03166113db5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105e1565b60006113e683610ba9565b9050806001600160a01b0316846001600160a01b0316148061142d57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610e745750836001600160a01b031661144684610690565b6001600160a01b031614949350505050565b611463848484611724565b61146f848484846118c0565b6109445760405162461bcd60e51b81526004016105e190612083565b6000818152600b60209081526040808320548151928301526060928392909101604051602081830303815290604052905060006114c785610ba9565b604080516001600160a01b0390921660208301520160408051601f1981840301815291905291959194509092505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611532576115326120d5565b6001600160a01b0392831660209182029290920101526009546040516332fe2d9b60e21b815291169063cbf8b66c9061156f9084906004016120eb565b600060405180830381865afa15801561158c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115b49190810190612138565b6000815181106115c6576115c66120d5565b6020026020010151915050919050565b600080610e74836119c1565b6001600160a01b0382166116385760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105e1565b6000818152600260205260409020546001600160a01b03161561169d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105e1565b6001600160a01b03821660009081526003602052604081208054600192906116c69084906121fb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b826001600160a01b031661173782610ba9565b6001600160a01b03161461179b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105e1565b6001600160a01b0382166117fd5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105e1565b6118086000826110f4565b6001600160a01b0383166000908152600360205260408120805460019290611831908490612213565b90915550506001600160a01b038216600090815260036020526040812080546001929061185f9084906121fb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60006001600160a01b0384163b156119b657604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061190490339089908890889060040161222a565b6020604051808303816000875af192505050801561193f575060408051601f3d908101601f1916820190925261193c9181019061225d565b60015b61199c573d80801561196d576040519150601f19603f3d011682016040523d82523d6000602084013e611972565b606091505b5080516000036119945760405162461bcd60e51b81526004016105e190612083565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610e74565b506001949350505050565b8051606090600090819084906119d88160026121fb565b67ffffffffffffffff8111156119f0576119f0611d37565b6040519080825280601f01601f191660200182016040528015611a1a576020820181803683370190505b50945060009350808403611a5f57600060f81b85600081518110611a4057611a406120d5565b60200101906001600160f81b031916908160001a905350505050915091565b60001981015b828181518110611a7757611a776120d5565b01602001516001600160f81b031916601760f91b03611b05578360f81b868260010181518110611aa957611aa96120d5565b60200101906001600160f81b031916908160001a90535084611ad2846001840160ff8816611bb6565b60408051602081019390935282015260600160405160208183030381529060405280519060200120945060009350611b55565b600184019350828181518110611b1d57611b1d6120d5565b602001015160f81c60f81b868260010181518110611b3d57611b3d6120d5565b60200101906001600160f81b031916908160001a9053505b8015611b645760001901611a65565b5083611b7583600060ff8716611bb6565b6040805160208101939093528201526060016040516020818303038152906040528051906020012093508260f81b85600081518110611a4057611a406120d5565b8251600090611bc583856121fb565b1115611bd057600080fd5b5091016020012090565b6001600160e01b0319811681146105ea57600080fd5b600060208284031215611c0257600080fd5b8135611c0d81611bda565b9392505050565b60005b83811015611c2f578181015183820152602001611c17565b838111156109445750506000910152565b60008151808452611c58816020860160208601611c14565b601f01601f19169290920160200192915050565b602081526000611c0d6020830184611c40565b600060208284031215611c9157600080fd5b5035919050565b6001600160a01b03811681146105ea57600080fd5b60008060408385031215611cc057600080fd5b8235611ccb81611c98565b946020939093013593505050565b600060208284031215611ceb57600080fd5b8135611c0d81611c98565b600080600060608486031215611d0b57600080fd5b8335611d1681611c98565b92506020840135611d2681611c98565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d7657611d76611d37565b604052919050565b600067ffffffffffffffff821115611d9857611d98611d37565b50601f01601f191660200190565b6000611db9611db484611d7e565b611d4d565b9050828152838383011115611dcd57600080fd5b828260208301376000602084830101529392505050565b600060208284031215611df657600080fd5b813567ffffffffffffffff811115611e0d57600080fd5b8201601f81018413611e1e57600080fd5b610e7484823560208401611da6565b60008060408385031215611e4057600080fd5b8235611e4b81611c98565b915060208301358015158114611e6057600080fd5b809150509250929050565b60008060008060808587031215611e8157600080fd5b8435611e8c81611c98565b93506020850135611e9c81611c98565b925060408501359150606085013567ffffffffffffffff811115611ebf57600080fd5b8501601f81018713611ed057600080fd5b611edf87823560208401611da6565b91505092959194509250565b60008060408385031215611efe57600080fd5b8235611f0981611c98565b91506020830135611e6081611c98565b600181811c90821680611f2d57607f821691505b602082108103611f4d57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611f6557600080fd5b8151611c0d81611c98565b600082601f830112611f8157600080fd5b8151611f8f611db482611d7e565b818152846020838601011115611fa457600080fd5b610e74826020830160208701611c14565b600060208284031215611fc757600080fd5b815167ffffffffffffffff811115611fde57600080fd5b610e7484828501611f70565b634e487b7160e01b600052601160045260246000fd5b60006001820161201257612012611fea565b5060010190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8381526060602082015260006120676060830185611c40565b82810360408401526120798185611c40565b9695505050505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b8181101561212c5783516001600160a01b031683529284019291840191600101612107565b50909695505050505050565b6000602080838503121561214b57600080fd5b825167ffffffffffffffff8082111561216357600080fd5b818501915085601f83011261217757600080fd5b81518181111561218957612189611d37565b8060051b612198858201611d4d565b91825283810185019185810190898411156121b257600080fd5b86860192505b838310156121ee578251858111156121d05760008081fd5b6121de8b89838a0101611f70565b83525091860191908601906121b8565b9998505050505050505050565b6000821982111561220e5761220e611fea565b500190565b60008282101561222557612225611fea565b500390565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061207990830184611c40565b60006020828403121561226f57600080fd5b8151611c0d81611bda56fea26469706673582212205711976da822060db6f13c6d87891a29fb5b7512618e62305ea8f8f7b347169664736f6c634300080f0033";

type ENounsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ENounsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ENouns__factory extends ContractFactory {
  constructor(...args: ENounsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ENouns";
  }

  deploy(
    name: string,
    symbol: string,
    erc721Storage: string,
    ensReverseRecords: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ENouns> {
    return super.deploy(
      name,
      symbol,
      erc721Storage,
      ensReverseRecords,
      overrides || {}
    ) as Promise<ENouns>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    erc721Storage: string,
    ensReverseRecords: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      erc721Storage,
      ensReverseRecords,
      overrides || {}
    );
  }
  attach(address: string): ENouns {
    return super.attach(address) as ENouns;
  }
  connect(signer: Signer): ENouns__factory {
    return super.connect(signer) as ENouns__factory;
  }
  static readonly contractName: "ENouns";
  public readonly contractName: "ENouns";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ENounsInterface {
    return new utils.Interface(_abi) as ENounsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ENouns {
    return new Contract(address, _abi, signerOrProvider) as ENouns;
  }
}
