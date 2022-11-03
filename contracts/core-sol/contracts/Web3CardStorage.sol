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
  mapping(uint256 => string) private _name;
  mapping(uint256 => string) private _emojiMap;

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

  function getImageBytes(uint256 tokenId) external view returns (bytes memory) {
    address account = IERC721(erc721KInstance).ownerOf(tokenId);
    return _generateBytesData(tokenId, account);
  }

  function getTraitsBytes(uint256 tokenId) external view returns (bytes memory) {
    address account = IERC721(erc721KInstance).ownerOf(tokenId);
    return _generateBytesData(tokenId, account);
  }

  function getPreview(uint256 tokenId, address account)
    external
    view
    returns (bytes memory imageData)
  {
    return _generateBytesData(tokenId, account);
  }

  function setEmoji(uint256 tokenId, string memory emoji) external {
    require(_msgSender() == IERC721(erc721KInstance).ownerOf(tokenId), "Web3CardStorage:not-owner");
    _emojiMap[tokenId] = emoji;
  }

  function setERC20TWABInstance(address _erc20TWABInstance) external onlyOwner {
    erc20TWABInstance = _erc20TWABInstance;
  }

  function setERC721KInstance(address _erc721KInstance) external onlyOwner {
    erc721KInstance = _erc721KInstance;
  }

  function _generateBytesData(uint256 _tokenId, address account)
    internal
    view
    returns (bytes memory bytesData)
  {
    uint256 balance;
    uint256 avgBalance2Weeks;
    uint256 avgBalance8Weeks;
    uint256 avgBalance26Weeks;
    string memory emojiFetch = _emojiMap[_tokenId];

    if (bytes(emojiFetch).length == 0) {
      emojiFetch = unicode"💳";
    }

    if (erc20TWABInstance != address(0)) {
      console.log(erc20TWABInstance, "erc20TWABInstance");
      // uint256 balance = ERC20TWAB(erc20TWABInstance).balanceOf(account);
      uint256 balance = 0;
      console.log(balance, "balance");
      // Average Balances
      uint64 start2Weeks = uint64(block.timestamp - 2 weeks);
      uint64 start8Weeks = uint64(block.timestamp - 8 weeks);
      uint64 start26Weeks = uint64(block.timestamp - 26 weeks);
      uint64 end = uint64(block.timestamp);
      avgBalance2Weeks = ERC20TWAB(erc20TWABInstance).getAverageBalanceBetween(
        account,
        start2Weeks,
        end
      );
      avgBalance8Weeks = ERC20TWAB(erc20TWABInstance).getAverageBalanceBetween(
        account,
        start8Weeks,
        end
      );
      avgBalance26Weeks = ERC20TWAB(erc20TWABInstance).getAverageBalanceBetween(
        account,
        start26Weeks,
        end
      );
    }

    bytesData = bytes(
      abi.encode(
        account,
        balance,
        avgBalance2Weeks,
        avgBalance8Weeks,
        avgBalance26Weeks,
        emojiFetch
      )
    );
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
