// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { svg } from "@erc721k/periphery-sol/contracts/svg/svg.sol";
import { OwnedThreeStep } from "@turbo-eth/solbase-sol/src/auth/OwnedThreeStep.sol";
import { svgUtils } from "@erc721k/periphery-sol/contracts/svg/svgUtils.sol";
import { SVGLibrary } from "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol";
import { ISVGModule } from "@erc721k/periphery-sol/contracts/interfaces/ISVGModule.sol";

contract Web3Assets is OwnedThreeStep {
  string private encoding = "(uint8, uint8)";
  mapping(bytes32 => string) private assets;

  /* ===================================================================================== */
  /* Constructor & Modifiers                                                               */
  /* ===================================================================================== */

  constructor(address _owner) OwnedThreeStep(_owner) {}

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function getEncoding() external view returns (string memory) {
    return encoding;
  }

  function get(bytes32 position) external view returns (string memory) {
    return assets[position];
  }

  function decode(bytes memory input) external view returns (string memory) {
    bytes32 position = abi.decode(input, (bytes32));
    return assets[position];
  }

  function set(bytes32 position, string memory svg) external onlyOwner {
    assets[position] = svg;
  }
}
