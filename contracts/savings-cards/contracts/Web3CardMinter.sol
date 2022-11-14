//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Web3Card } from "./Web3Card.sol";
import { Owned } from "@turbo-eth/solbase-sol/src/auth/Owned.sol";

contract Web3CardMinter is Owned {
  address public erc721Instance;

  constructor(address admin, address _erc721Instance) Owned(admin) {
    erc721Instance = _erc721Instance;
  }

  function mintCard(address to) public {
    Web3Card(erc721Instance).mint(to);
  }

  function burnCard(uint256 tokenId) public {
    Web3Card(erc721Instance).burn(tokenId);
  }
}
