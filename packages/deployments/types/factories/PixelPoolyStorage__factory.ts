/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PixelPoolyStorage,
  PixelPoolyStorageInterface,
  ERC721Storage,
} from "../PixelPoolyStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_svgRender_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_traitsFetch_",
        type: "address",
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
        internalType: "struct ERC721Storage.ContractURI",
        name: "_contractURI_",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
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
        indexed: false,
        internalType: "struct ERC721Storage.ContractURI",
        name: "contractURI",
        type: "tuple",
      },
    ],
    name: "ContractURIUpdated",
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
        indexed: false,
        internalType: "address",
        name: "svgRender",
        type: "address",
      },
    ],
    name: "SvgRenderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "traitsFetch",
        type: "address",
      },
    ],
    name: "TraitsFetchUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "constructContractURI",
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
      {
        internalType: "bytes",
        name: "input0",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "input1",
        type: "bytes",
      },
    ],
    name: "constructTokenURI",
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
    inputs: [],
    name: "erc721ImageSignal",
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
    name: "erc721Instance",
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
    name: "getCharacter",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "background",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "head",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "body",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "headAcc",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "bodyAcc",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "leftAcc",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "rightAcc",
            type: "uint8",
          },
        ],
        internalType: "struct PixelPoolyStorage.Character",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractDescription",
    outputs: [
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
        internalType: "struct ERC721Storage.ContractURI",
        name: "",
        type: "tuple",
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
    name: "getImageBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getPreview",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStore",
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
    name: "getSvgRender",
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
    name: "getTraitsBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTraitsFetch",
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
      {
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "slot",
        type: "uint8",
      },
    ],
    name: "isItemSlotActive",
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
    inputs: [],
    name: "pixelStoreInstance",
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
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "render",
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
        internalType: "struct ERC721Storage.ContractURI",
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
        internalType: "address",
        name: "_erc721Instance",
        type: "address",
      },
    ],
    name: "setERC721KInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pixelStoreInstance",
        type: "address",
      },
    ],
    name: "setPixelStoreInstance",
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
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "slot",
        type: "uint8",
      },
    ],
    name: "setPositionSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "svgRender",
        type: "address",
      },
    ],
    name: "setSvgRender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traitsFetch",
        type: "address",
      },
    ],
    name: "setTraitsFetch",
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
  "0x60806040523480156200001157600080fd5b506040516200273338038062002733833981016040819052620000349162000280565b82828262000042336200010a565b600180546001600160a01b038086166001600160a01b03199283161790925560028054928516929091169190911790558051819060039081906200008790826200046e565b50602082015160018201906200009e90826200046e565b5060408201516002820190620000b590826200046e565b5060608201516003820190620000cc90826200046e565b5060808201516004820190620000e390826200046e565b5060a08201516005820190620000fa90826200046e565b509050505050505050506200053a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200017257600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620001b257620001b262000177565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620001e357620001e362000177565b604052919050565b600082601f830112620001fd57600080fd5b81516001600160401b0381111562000219576200021962000177565b60206200022f601f8301601f19168201620001b8565b82815285828487010111156200024457600080fd5b60005b838110156200026457858101830151828201840152820162000247565b83811115620002765760008385840101525b5095945050505050565b6000806000606084860312156200029657600080fd5b620002a1846200015a565b9250620002b1602085016200015a565b60408501519092506001600160401b0380821115620002cf57600080fd5b9085019060c08288031215620002e457600080fd5b620002ee6200018d565b825182811115620002fe57600080fd5b6200030c89828601620001eb565b8252506020830151828111156200032257600080fd5b6200033089828601620001eb565b6020830152506040830151828111156200034957600080fd5b6200035789828601620001eb565b6040830152506060830151828111156200037057600080fd5b6200037e89828601620001eb565b6060830152506080830151828111156200039757600080fd5b620003a589828601620001eb565b60808301525060a083015182811115620003be57600080fd5b620003cc89828601620001eb565b60a0830152508093505050509250925092565b600181811c90821680620003f457607f821691505b6020821081036200041557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046957600081815260208120601f850160051c81016020861015620004445750805b601f850160051c820191505b81811015620004655782815560010162000450565b5050505b505050565b81516001600160401b038111156200048a576200048a62000177565b620004a2816200049b8454620003df565b846200041b565b602080601f831160018114620004da5760008415620004c15750858301515b600019600386901b1c1916600185901b17855562000465565b600085815260208120601f198616915b828110156200050b57888601518255948401946001909101908401620004ea565b50858210156200052a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6121e9806200054a6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638e236af2116100c3578063d12bcb121161007c578063d12bcb1214610332578063dabb053114610347578063dd0bfe4214610474578063e82b146214610487578063f06796161461049a578063f2fde38b146104ad57600080fd5b80638e236af2146102c65780639a17092a146102d95780639eda5e76146102ea578063a3f22a20146102fd578063ae70ed131461030e578063c2722ecc1461032157600080fd5b806336f337c61161011557806336f337c61461026a5780633ee6fa921461027f57806357e30f4414610292578063715018a6146102a5578063725fa09c146102ad5780638da5cb5b146102b557600080fd5b80630976c5171461015d5780630f34c166146101865780631958897f146101b15780631afc4a6b146101c45780632d08d6b714610244578063316df61e14610257575b600080fd5b61017061016b36600461159d565b6104c0565b60405161017d919061160e565b60405180910390f35b600a54610199906001600160a01b031681565b6040516001600160a01b03909116815260200161017d565b600b54610199906001600160a01b031681565b6102346101d2366004611637565b6040516001600160f81b031960f884811b8216602084015283901b166021820152600090819060220160408051601f1981840301815291815281516020928301206000888152600d8452828120918152925290205460ff169150509392505050565b604051901515815260200161017d565b61017061025236600461159d565b610546565b610170610265366004611761565b6105e0565b61027d6102783660046117ab565b61065c565b005b61027d61028d3660046117ab565b610686565b61027d6102a03660046117c8565b6106e3565b61027d61079a565b6101706107ae565b6000546001600160a01b0316610199565b61027d6102d4366004611637565b61080e565b6001546001600160a01b0316610199565b61027d6102f83660046117ab565b610a84565b6002546001600160a01b0316610199565b61027d61031c3660046117ab565b610aae565b600a546001600160a01b0316610199565b61033a610b04565b60405161017d91906118e9565b61040d61035536600461159d565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152506000908152600c6020908152604091829020825160e081018452905460ff808216835261010082048116938301939093526201000081048316938201939093526301000000830482166060820152640100000000830482166080820152650100000000008304821660a0820152600160301b9092041660c082015290565b60405161017d9190600060e08201905060ff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401528060c08501511660c08401525092915050565b600954610199906001600160a01b031681565b6101706104953660046119a1565b610ebb565b6101706104a83660046119d1565b610ec7565b61027d6104bb3660046117ab565b611031565b6009546040516331a9108f60e11b8152600481018390526060916000916001600160a01b0390911690636352211e90602401602060405180830381865afa15801561050f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105339190611a3e565b905061053f83826110aa565b9392505050565b6009546040516331a9108f60e11b8152600481018390526060916001600160a01b031690636352211e90602401602060405180830381865afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b49190611a3e565b604080516001600160a01b039092166020830152015b6040516020818303038152906040529050919050565b6001546040516318b6fb0f60e11b81526060916001600160a01b03169063316df61e9061061190859060040161160e565b600060405180830381865afa15801561062e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106569190810190611a5b565b92915050565b610664611179565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b61068e611179565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527f10c0817f42b2182992d55b707430b153f12e59d7e54a975bfec790497dd7f63f906020015b60405180910390a150565b6106eb611179565b8051819060039081906106fe9082611b52565b50602082015160018201906107139082611b52565b50604082015160028201906107289082611b52565b506060820151600382019061073d9082611b52565b50608082015160048201906107529082611b52565b5060a082015160058201906107679082611b52565b509050507f03a10335d532669eac03b3b7e4ce44aff7f8cb14b7aa397c653fdcb40ae06bec816040516106d891906118e9565b6107a2611179565b6107ac60006111d3565b565b6040516060906107ea906107d690600390600490600590600690600790600890602001611c85565b604051602081830303815290604052611223565b6040516020016107fa9190611e0b565b604051602081830303815290604052905090565b6009546001600160a01b0316336001600160a01b0316146108765760405162461bcd60e51b815260206004820152601d60248201527f506978656c506f6f6c7953746f726167653a6f6e6c792d65726337323100000060448201526064015b60405180910390fd5b6040516001600160f81b031960f884811b8216602084015283901b16602182015260009060220160408051601f1981840301815291815281516020928301206000878152600d845282812082825290935291205490915060ff1661091c5760405162461bcd60e51b815260206004820152601f60248201527f506978656c506f6f6c7953746f726167653a736c6f742d696e61637469766500604482015260640161086d565b8260ff16600003610947576000848152600c60205260409020805460ff191660ff8416179055610a7e565b8260ff16600103610977576000848152600c60205260409020805461ff00191661010060ff851602179055610a7e565b8260ff166002036109a9576000848152600c60205260409020805462ff000019166201000060ff851602179055610a7e565b8260ff166003036109dd576000848152600c60205260409020805463ff0000001916630100000060ff851602179055610a7e565b8260ff16600403610a13576000848152600c60205260409020805464ff00000000191664010000000060ff851602179055610a7e565b8260ff16600503610a4b576000848152600c60205260409020805465ff000000000019166501000000000060ff851602179055610a7e565b8260ff16600603610a7e576000848152600c60205260409020805466ff0000000000001916600160301b60ff8516021790555b50505050565b610a8c611179565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b610ab6611179565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f3c2715cb5e4b39dd4af38ac12bb292a030fb6a063dbd5467ed49da665bcaa973906020016106d8565b610b3d6040518060c001604052806060815260200160608152602001606081526020016060815260200160608152602001606081525090565b60036040518060c0016040529081600082018054610b5a90611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8690611ac9565b8015610bd35780601f10610ba857610100808354040283529160200191610bd3565b820191906000526020600020905b815481529060010190602001808311610bb657829003601f168201915b50505050508152602001600182018054610bec90611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1890611ac9565b8015610c655780601f10610c3a57610100808354040283529160200191610c65565b820191906000526020600020905b815481529060010190602001808311610c4857829003601f168201915b50505050508152602001600282018054610c7e90611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610caa90611ac9565b8015610cf75780601f10610ccc57610100808354040283529160200191610cf7565b820191906000526020600020905b815481529060010190602001808311610cda57829003601f168201915b50505050508152602001600382018054610d1090611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3c90611ac9565b8015610d895780601f10610d5e57610100808354040283529160200191610d89565b820191906000526020600020905b815481529060010190602001808311610d6c57829003601f168201915b50505050508152602001600482018054610da290611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610dce90611ac9565b8015610e1b5780601f10610df057610100808354040283529160200191610e1b565b820191906000526020600020905b815481529060010190602001808311610dfe57829003601f168201915b50505050508152602001600582018054610e3490611ac9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6090611ac9565b8015610ead5780601f10610e8257610100808354040283529160200191610ead565b820191906000526020600020905b815481529060010190602001808311610e9057829003601f168201915b505050505081525050905090565b606061053f83836110aa565b600b54606090600160a01b900460ff1615610eec57610ee584611388565b905061053f565b6001546040516318b6fb0f60e11b81526000916001600160a01b03169063316df61e90610f1d90879060040161160e565b600060405180830381865afa158015610f3a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f629190810190611a5b565b60025460405163f6559a6b60e01b81529192506000916001600160a01b039091169063f6559a6b90610f9890879060040161160e565b600060405180830381865afa158015610fb5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fdd9190810190611a5b565b9050611009610feb8761145e565b610ff488611479565b84846040516020016107d69493929190611e50565b6040516020016110199190611e0b565b6040516020818303038152906040529250505061053f565b611039611179565b6001600160a01b03811661109e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161086d565b6110a7816111d3565b50565b506000908152600c6020908152604091829020825160e08082018552915460ff80821680845261010080840483168588018190526201000085048416868a018190526301000000860485166060808901829052640100000000880487166080808b01829052650100000000008a04891660a0808d01829052600160301b909b0490991660c09b8c018190528e519d8e01989098528c8e0195909552908b019290925291890191909152938701939093529285015283830191909152835180840390920182529190910190915290565b6000546001600160a01b031633146107ac5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161086d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060815160000361124257505060408051602081019091526000815290565b600060405180606001604052806040815260200161217460409139905060006003845160026112719190611f57565b61127b9190611f85565b611286906004611f99565b90506000611295826020611f57565b67ffffffffffffffff8111156112ad576112ad611673565b6040519080825280601f01601f1916602001820160405280156112d7576020820181803683370190505b509050818152600183018586518101602084015b81831015611343576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253506001016112eb565b60038951066001811461135d576002811461136e5761137a565b613d3d60f01b60011983015261137a565b603d60f81b6000198301525b509398975050505050505050565b604080516020810182526000808252600b5492516318b6fb0f60e11b81526060936001600160a01b03169063316df61e906113c790859060040161160e565b600060405180830381865afa1580156113e4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261140c9190810190611a5b565b905061143661141a8561145e565b61142386611479565b836040516020016107d693929190611fb8565b6040516020016114469190611e0b565b60405160208183030381529060405292505050919050565b606061146982611494565b6040516020016105ca919061209c565b606061148482611494565b6040516020016105ca91906120d0565b6060816000036114bb5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156114e557806114cf81612119565b91506114de9050600a83611f85565b91506114bf565b60008167ffffffffffffffff81111561150057611500611673565b6040519080825280601f01601f19166020018201604052801561152a576020820181803683370190505b5090505b84156115955761153f600183612132565b915061154c600a86612149565b611557906030611f57565b60f81b81838151811061156c5761156c61215d565b60200101906001600160f81b031916908160001a90535061158e600a86611f85565b945061152e565b949350505050565b6000602082840312156115af57600080fd5b5035919050565b60005b838110156115d15781810151838201526020016115b9565b83811115610a7e5750506000910152565b600081518084526115fa8160208601602086016115b6565b601f01601f19169290920160200192915050565b60208152600061053f60208301846115e2565b803560ff8116811461163257600080fd5b919050565b60008060006060848603121561164c57600080fd5b8335925061165c60208501611621565b915061166a60408501611621565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156116ac576116ac611673565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156116db576116db611673565b604052919050565b600067ffffffffffffffff8211156116fd576116fd611673565b50601f01601f191660200190565b600082601f83011261171c57600080fd5b813561172f61172a826116e3565b6116b2565b81815284602083860101111561174457600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561177357600080fd5b813567ffffffffffffffff81111561178a57600080fd5b6115958482850161170b565b6001600160a01b03811681146110a757600080fd5b6000602082840312156117bd57600080fd5b813561053f81611796565b6000602082840312156117da57600080fd5b813567ffffffffffffffff808211156117f257600080fd5b9083019060c0828603121561180657600080fd5b61180e611689565b82358281111561181d57600080fd5b6118298782860161170b565b82525060208301358281111561183e57600080fd5b61184a8782860161170b565b60208301525060408301358281111561186257600080fd5b61186e8782860161170b565b60408301525060608301358281111561188657600080fd5b6118928782860161170b565b6060830152506080830135828111156118aa57600080fd5b6118b68782860161170b565b60808301525060a0830135828111156118ce57600080fd5b6118da8782860161170b565b60a08301525095945050505050565b602081526000825160c0602084015261190560e08401826115e2565b90506020840151601f198085840301604086015261192383836115e2565b9250604086015191508085840301606086015261194083836115e2565b9250606086015191508085840301608086015261195d83836115e2565b925060808601519150808584030160a086015261197a83836115e2565b925060a08601519150808584030160c08601525061199882826115e2565b95945050505050565b600080604083850312156119b457600080fd5b8235915060208301356119c681611796565b809150509250929050565b6000806000606084860312156119e657600080fd5b83359250602084013567ffffffffffffffff80821115611a0557600080fd5b611a118783880161170b565b93506040860135915080821115611a2757600080fd5b50611a348682870161170b565b9150509250925092565b600060208284031215611a5057600080fd5b815161053f81611796565b600060208284031215611a6d57600080fd5b815167ffffffffffffffff811115611a8457600080fd5b8201601f81018413611a9557600080fd5b8051611aa361172a826116e3565b818152856020838501011115611ab857600080fd5b6119988260208301602086016115b6565b600181811c90821680611add57607f821691505b602082108103611afd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115611b4d57600081815260208120601f850160051c81016020861015611b2a5750805b601f850160051c820191505b81811015611b4957828155600101611b36565b5050505b505050565b815167ffffffffffffffff811115611b6c57611b6c611673565b611b8081611b7a8454611ac9565b84611b03565b602080601f831160018114611bb55760008415611b9d5750858301515b600019600386901b1c1916600185901b178555611b49565b600085815260208120601f198616915b82811015611be457888601518255948401946001909101908401611bc5565b5085821015611c025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154611c1f81611ac9565b60018281168015611c375760018114611c4c57611c7b565b60ff1984168752821515830287019450611c7b565b8560005260208060002060005b85811015611c725781548a820152908401908201611c59565b50505082870194505b5050505092915050565b673d913730b6b2911d60c11b8152601160f91b60088201526000611cac6009830189611c12565b61088b60f21b81526002611cd28183016d113232b9b1b934b83a34b7b7111d60911b9052565b601160f91b6010830152611ce9601183018a611c12565b61088b60f21b81529150671134b6b0b3b2911d60c11b82820152601160f91b600a830152611d1a600b830189611c12565b61088b60f21b815291506e1132bc3a32b93730b62634b735911d60891b82820152601160f91b6011830152611d526012830188611c12565b61088b60f21b815291507f2273656c6c65724665654261736973506f696e7473223a00000000000000000082820152601160f91b6019830152611d98601a830187611c12565b61088b60f21b815291506e113332b2a932b1b4b834b2b73a111d60891b82820152601160f91b6011830152611dd06012830186611c12565b601160f91b8152607d60f81b6001820152019998505050505050505050565b60008151611e018185602086016115b6565b9290920192915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251611e4381601d8501602087016115b6565b91909101601d0192915050565b673d913730b6b2911d60c11b8152601160f91b60088201528451600090611e7e816009850160208a016115b6565b61088b60f21b6009918401918201526d113232b9b1b934b83a34b7b7111d60911b600b820152611eb460198201601160f91b9052565b611ec1601a820187611def565b61088b60f21b81529050671134b6b0b3b2911d60c11b6002820152601160f91b600a820152611ef3600b820186611def565b61088b60f21b815290506e2261747472696275746573223a205b60881b6002820152611f226011820185611def565b605d60f81b8152607d60f81b6001820152600201979650505050505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611f6a57611f6a611f41565b500190565b634e487b7160e01b600052601260045260246000fd5b600082611f9457611f94611f6f565b500490565b6000816000190483118215151615611fb357611fb3611f41565b500290565b673d913730b6b2911d60c11b8152601160f91b60088201528351600090611fe68160098501602089016115b6565b61088b60f21b6009918401918201526d113232b9b1b934b83a34b7b7111d60911b600b82015261201c60198201601160f91b9052565b612029601a820186611def565b61088b60f21b81529050671134b6b0b3b2911d60c11b6002820152601160f91b600a82015261205b600b820185611def565b61088b60f21b81526e2261747472696275746573223a205b60881b6002820152605d60f81b6011820152607d60f81b60128201526013019695505050505050565b6b506978656c506f6f6c79202360a01b8152600082516120c381600c8501602087016115b6565b91909101600c0192915050565b674d656d626572202360c01b8152600082516120f38160088501602087016115b6565b6e1037b3102834bc32b62837b7b63c9760891b6008939091019283015250601701919050565b60006001820161212b5761212b611f41565b5060010190565b60008282101561214457612144611f41565b500390565b60008261215857612158611f6f565b500690565b634e487b7160e01b600052603260045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122001c6ea0735a496b6ae13607607b3d99690cac4188ef572c1b22baa818976a0cf64736f6c634300080f0033";

type PixelPoolyStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelPoolyStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PixelPoolyStorage__factory extends ContractFactory {
  constructor(...args: PixelPoolyStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PixelPoolyStorage";
  }

  deploy(
    _svgRender_: string,
    _traitsFetch_: string,
    _contractURI_: ERC721Storage.ContractURIStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PixelPoolyStorage> {
    return super.deploy(
      _svgRender_,
      _traitsFetch_,
      _contractURI_,
      overrides || {}
    ) as Promise<PixelPoolyStorage>;
  }
  getDeployTransaction(
    _svgRender_: string,
    _traitsFetch_: string,
    _contractURI_: ERC721Storage.ContractURIStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _svgRender_,
      _traitsFetch_,
      _contractURI_,
      overrides || {}
    );
  }
  attach(address: string): PixelPoolyStorage {
    return super.attach(address) as PixelPoolyStorage;
  }
  connect(signer: Signer): PixelPoolyStorage__factory {
    return super.connect(signer) as PixelPoolyStorage__factory;
  }
  static readonly contractName: "PixelPoolyStorage";
  public readonly contractName: "PixelPoolyStorage";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PixelPoolyStorageInterface {
    return new utils.Interface(_abi) as PixelPoolyStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PixelPoolyStorage {
    return new Contract(address, _abi, signerOrProvider) as PixelPoolyStorage;
  }
}