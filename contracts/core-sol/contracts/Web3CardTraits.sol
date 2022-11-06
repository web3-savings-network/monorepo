// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { IStream } from "./interfaces/IStream.sol";
import { ITraitsFetch } from "./interfaces/ITraitsFetch.sol";

/**
 * @title Web3CardTraits
 * @author Kames Geraghty
 */
contract Web3CardTraits is ITraitsFetch, Ownable {
  constructor() {}

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function fetch(bytes memory input) external view returns (string memory) {
    (
      address account,
      uint256 balance,
      uint256 avgBalance2Weeks,
      uint256 avgBalance8Weeks,
      uint256 avgBalance26Weeks,
      string memory emoji
    ) = abi.decode(input, (address, uint256, uint256, uint256, uint256, string));
    string memory _address = Strings.toHexString(uint256(uint160(account)), 20);
    return
      string.concat(
        _generateTrait("owner", _address),
        ",",
        _generateTrait("emoji", emoji),
        ",",
        _generateTrait("balance", Strings.toString(balance)),
        ",",
        _generateTrait("avgBalance2Weeks", Strings.toString(avgBalance2Weeks)),
        ",",
        _generateTrait("avgBalance8Weeks", Strings.toString(avgBalance8Weeks)),
        ",",
        _generateTrait("avgBalance26Weeks", Strings.toString(avgBalance26Weeks))
      );
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _generateTrait(string memory _key, string memory _value)
    internal
    pure
    returns (string memory __traits)
  {
    return string.concat('{"trait_type":' '"', _key, '",', '"value":', '"', _value, '"}');
  }

  function _generateTraits(string[] memory _keys, string[] memory _values)
    internal
    pure
    returns (string memory __traits)
  {
    string memory _traits = "";
    for (uint256 i = 0; i < _keys.length; i++) {
      if (bytes(_values[i]).length > 0) {
        _traits = string.concat(_traits, _generateTrait(_keys[i], _values[i]), ",");
      }
    }
    return _traits;
  }
}
