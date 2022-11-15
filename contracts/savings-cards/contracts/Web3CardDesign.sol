// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { OwnedThreeStep } from "@turbo-eth/solbase-sol/src/auth/OwnedThreeStep.sol";

contract Web3CardDesign is OwnedThreeStep {
  address public erc721KMinterInstance;

  uint256 private STYLE_UPGRADE_COST = 0.01 ether;

  mapping(uint256 => uint8) private _color;
  mapping(uint256 => uint8) private _emoji;

  mapping(uint8 => bytes) private _colorMap;
  mapping(uint8 => string) private _emojiMap;

  mapping(address => bool) private _supporter;

  /* ===================================================================================== */
  /* Constructor & Modifiers                                                               */
  /* ===================================================================================== */

  constructor(address _owner) OwnedThreeStep(_owner) {
    _colorMap[0] = hex"5B1FA8"; // Purple
    _colorMap[1] = hex"292929"; // Black
    _colorMap[2] = hex"782E1B"; // Red
    _colorMap[3] = hex"1F387A"; // Blue

    _emojiMap[0] = unicode"🏦";
    _emojiMap[1] = unicode"🔥";
    _emojiMap[2] = unicode"🌟";
    _emojiMap[3] = unicode"🚀";
    _emojiMap[4] = unicode"👑";
    _emojiMap[5] = unicode"🔮";
    _emojiMap[6] = unicode"🌈";
    _emojiMap[7] = unicode"🎉";
    _emojiMap[8] = unicode"🎁";
    _emojiMap[9] = unicode"🎲";
    _emojiMap[10] = unicode"🎰";
    _emojiMap[11] = unicode"🎮";
    _emojiMap[12] = unicode"🎳";
    _emojiMap[13] = unicode"🎸";
    _emojiMap[14] = unicode"🎹";
    _emojiMap[15] = unicode"🎼";
    _emojiMap[16] = unicode"🏀";
    _emojiMap[17] = unicode"🏈";
    _emojiMap[19] = unicode"🏊";
    _emojiMap[20] = unicode"🏆";
    _emojiMap[21] = unicode"🏓";
    _emojiMap[22] = unicode"🏔";
    _emojiMap[23] = unicode"🏕";
    _emojiMap[24] = unicode"🏖";
    _emojiMap[25] = unicode"🏗";
    _emojiMap[26] = unicode"🏘";
    _emojiMap[27] = unicode"🏙";
    _emojiMap[28] = unicode"🏚";
    _emojiMap[29] = unicode"🏛";
    _emojiMap[30] = unicode"🏜";
    _emojiMap[31] = unicode"🏝";
    _emojiMap[32] = unicode"🏞";
    _emojiMap[33] = unicode"🦜";
    _emojiMap[35] = unicode"🦊";
    _emojiMap[36] = unicode"🦋";
    _emojiMap[37] = unicode"🦌";
    _emojiMap[38] = unicode"🦍";
    _emojiMap[39] = unicode"🦎";
    _emojiMap[40] = unicode"🦏";
    _emojiMap[41] = unicode"🦐";
    _emojiMap[42] = unicode"🦑";
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function getEmoji(uint256 tokenId) external view returns (string memory) {
    return _emojiMap[_emoji[tokenId]];
  }

  function getColor(uint256 tokenId) external view returns (bytes memory) {
    return _colorMap[_color[tokenId]];
  }

  function getEmojiFromMap(uint8 emojiId) external view returns (string memory) {
    return _emojiMap[emojiId];
  }

  function getColorFromMap(uint8 colorId) external view returns (bytes memory) {
    return _colorMap[colorId];
  }

  function setDuringMint(
    uint256 tokenId,
    uint8 color,
    uint8 emoji
  ) external {
    require(msg.sender == erc721KMinterInstance, "Web3CardDesign:not-authorized");
    _color[tokenId] = color;
    _emoji[tokenId] = emoji;
  }

  function setEmoji(uint256 tokenId, uint8 emoji) external payable {
    require(msg.value >= STYLE_UPGRADE_COST, "Web3CardDesign:insufficient-eth");
    require(
      msg.sender == IERC721(erc721KMinterInstance).ownerOf(tokenId),
      "Web3CardDesign:not-owner"
    );
    _emoji[tokenId] = emoji;
    _release(msg.value);
  }

  function setColor(uint256 tokenId, uint8 color) external payable {
    require(msg.value >= STYLE_UPGRADE_COST, "Web3CardDesign:insufficient-eth");
    require(
      msg.sender == IERC721(erc721KMinterInstance).ownerOf(tokenId),
      "Web3CardDesign:not-owner"
    );
    _color[tokenId] = color;
    _release(msg.value);
  }

  function setERC721KMinterInstance(address _erc721KMinterInstance) external onlyOwner {
    erc721KMinterInstance = _erc721KMinterInstance;
  }

  function setStyleUpgradeCost(uint256 _styleUpgradeCost) external onlyOwner {
    STYLE_UPGRADE_COST = _styleUpgradeCost;
  }

  function _release(uint256 amount) internal {
    (bool _success, ) = erc721KMinterInstance.call{ value: amount }("");
    require(_success, "Web3CardDesign:release-failed");
  }
}
