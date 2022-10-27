// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

interface ISVGModule {
  function render(bytes memory input) external view returns (string memory);

  function getEncoding() external view returns (string memory);
}
