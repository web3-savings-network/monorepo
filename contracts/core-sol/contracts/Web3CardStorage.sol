pragma solidity 0.8.15;

import "hardhat/console.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { ERC20TWAB } from "./ERC20TWAB.sol";
import { ERC721Storage } from "@erc721k/core-sol/contracts/ERC721Storage.sol";
import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @title Web3CardStorage
 * @author Kames Geraghty
 */
contract Web3CardStorage is ERC721Storage {
  address public erc20TWABInstance;
  address public erc721KInstance;
  mapping(uint256 => string) _name;

  mapping(uint256 => string) private _emoji;

  constructor(
    address _svgRender_,
    address _traitsFetch_,
    ContractURI memory _contractURI_
  ) ERC721Storage(_svgRender_, _traitsFetch_, _contractURI_) {}

  /* ===================================================================================== */
  /* Override Functions                                                                    */
  /* ===================================================================================== */
  function _parseName(uint256 _tokenId) internal view override returns (string memory) {
    return string.concat("Example #", Strings.toString(_tokenId));
  }

  function _parseDescription(uint256 _tokenId) internal view override returns (string memory) {
    return string.concat("Member #", Strings.toString(_tokenId), " of Example.");
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function getData(uint256 _tokenId) internal view returns (string memory) {
    return _name[_tokenId];
  }

  function getImageBytes(uint256 tokenId) external view returns (bytes memory imageData) {
    address account = IERC721(erc721KInstance).ownerOf(tokenId);
    uint256 balance;
    string memory emojiFetch = _emoji[tokenId];
    if (bytes(emojiFetch).length == 0) {
      _emoji[tokenId] = unicode"💳";
    }
    if (erc20TWABInstance != address(0)) {
      balance = ERC20TWAB(erc20TWABInstance).balanceOf(account);
    }
    imageData = bytes(abi.encode(account, currentBalance, unicode"💳"));
  }

  function getTraitsBytes(uint256 tokenId) external view returns (bytes memory) {
    return bytes(abi.encode(IERC721(erc721KInstance).ownerOf(tokenId)));
  }

  function setEmoji(uint256 _tokenId, string memory _emoji) external {
    require(msg.sender == IERC721(erc721KInstance).ownerOf(_tokenId), "Web3CardStorage:not-owner");
    _emoji[_tokenId] = _emoji;
  }

  function setERC20TWABInstance(address _erc20TWABInstance) external onlyOwner {
    erc20TWABInstance = _erc20TWABInstance;
  }

  function setERC721KInstance(address _erc721KInstance) external onlyOwner {
    erc721KInstance = _erc721KInstance;
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _getAverageBalance(
    address _account,
    uint64 _start,
    uint64 _end
  ) internal view returns (uint256) {
    // return 0;
    return ERC20TWAB(erc20TWABInstance).getAverageBalanceBetween(_account, _start, _end);
  }
}
