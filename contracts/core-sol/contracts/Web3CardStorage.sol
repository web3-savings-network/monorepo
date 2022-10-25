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
    address owner = IERC721(erc721KInstance).ownerOf(tokenId);
    uint256 currentBalance = ERC20TWAB(erc20TWABInstance).balanceOf(owner);
    uint256 avgBalance2Weeks = _getAverageBalance(
      owner,
      uint64(block.timestamp - 2 weeks),
      uint64(block.timestamp)
    );
    uint256 avgBalance4Weeks = _getAverageBalance(
      owner,
      uint64(block.timestamp - 4 weeks),
      uint64(block.timestamp)
    );
    uint256 avgBalance26Weeks = _getAverageBalance(
      owner,
      uint64(block.timestamp - 26 weeks),
      uint64(block.timestamp)
    );
    bytes memory imageData = bytes(
      abi.encode(owner, currentBalance, avgBalance2Weeks, avgBalance4Weeks, avgBalance26Weeks)
    );

    return imageData;
  }

  /**
   * @notice Get the trait bytes for a Pixel Pooly character
   * @param tokenId uint256 - The token ID to query.
   * @return bytes - Packed instructions for traits PixelPoolyTraits
   */
  function getTraitsBytes(uint256 tokenId) external view returns (bytes memory) {
    return bytes(abi.encode(IERC721(erc721KInstance).ownerOf(tokenId)));
  }

  function preview(uint256 tokenId) external view returns (bytes memory) {
    console.log(block.number, "BLOCK");
    console.log(erc20TWABInstance, "erc20TWABInstance");
    address account = address(uint160(uint256(tokenId)));
    console.log(account, "ACCOUNT");
    uint256 currentBalance = ERC20TWAB(erc20TWABInstance).balanceOf(account);
    console.log(currentBalance, "currentBalance");
    uint256 avgBalance2Weeks = _getAverageBalance(
      account,
      uint64(block.timestamp - 2 weeks),
      uint64(block.timestamp)
    );
    uint256 avgBalance4Weeks = _getAverageBalance(
      account,
      uint64(block.timestamp - 4 weeks),
      uint64(block.timestamp)
    );
    uint256 avgBalance26Weeks = _getAverageBalance(
      account,
      uint64(block.timestamp - 26 weeks),
      uint64(block.timestamp)
    );
    bytes memory imageData = bytes(
      abi.encode(account, currentBalance, avgBalance2Weeks, avgBalance4Weeks, avgBalance26Weeks)
    );

    return imageData;
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
