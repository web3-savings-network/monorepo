//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Owned } from "@turbo-eth/solbase-sol/src/auth/Owned.sol";
import { Web3Card } from "./Web3Card.sol";
import { Web3CardDesign } from "./Web3CardDesign.sol";

contract Web3CardActivator is Owned {
  address public erc721KInstance;
  address public erc721KDesignInstance;

  constructor(
    address admin,
    address _erc721KInstance,
    address _erc721KDesignInstance
  ) Owned(admin) {
    erc721KInstance = _erc721KInstance;
    erc721KDesignInstance = _erc721KDesignInstance;
  }

  function activate(address to) external {
    Web3Card(erc721KInstance).mint(to);
  }

  function activateWithStyle(
    address to,
    uint8 color,
    uint8 emoji
  ) external payable {
    if (color + emoji >= 1) require(msg.value >= 0.01 ether, "Web3CardActivator:insufficient-eth");
    uint256 tokenId_ = Web3Card(erc721KInstance).mint(to);
    Web3CardDesign(erc721KDesignInstance).setDuringMint(tokenId_, color, emoji);
  }

  function release(uint256 amount) external onlyOwner {
    (bool _success, ) = msg.sender.call{ value: amount }("");
    require(_success, "Web3CardActivator:eth-release-failed");
  }
}
