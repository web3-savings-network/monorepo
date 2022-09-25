//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { ERC721K } from "./ERC721K.sol";
import { ERC721Storage } from "@erc721k/core-sol/contracts/ERC721Storage.sol";
import { ISVGRender } from "./interfaces/ISVGRender.sol";
import { ERC20TWAB } from "./ERC20TWAB.sol";

contract ChanceCard is ERC721K {
  address public ercTwab;

  address private _minter;

  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage,
    address _ercTwab
  ) ERC721K(name, symbol, erc721Storage) {
    ercTwab = _ercTwab;
  }

  /* ===================================================================================== */
  /* Override Functions                                                                    */
  /* ===================================================================================== */

  /**
   * @notice
   * @dev Counterfactual initializeion of the smart contract balance.
   */
  function balanceOf(address owner) public view virtual override returns (uint256) {
    uint64[] memory start = new uint64[](1);
    uint64[] memory end = new uint64[](1);
    start[0] = 0;
    end[0] = uint64(block.timestamp);
    uint256[] memory balances = ERC20TWAB(ercTwab).getAverageBalancesBetween(owner, start, end);
    if (balances[0] > 0) {
      return 1;
    } else {
      return 0;
    }
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    address _addy = address(uint160(uint256(tokenId)));
    console.log(_addy);
    bytes memory input = abi.encodePacked(tokenId);
    uint256 claimable = 1000000000000000000;
    // uint64 start = 1640998861;
    uint64 start = uint64(block.timestamp - 2 weeks);
    uint64 end = uint64(block.timestamp);
    uint256 currentBalance = ERC20TWAB(0xdd4d117723C257CEe402285D3aCF218E9A8236E1).balanceOf(_addy);
    console.log(currentBalance);
    uint256 avgBalance = ERC20TWAB(0xdd4d117723C257CEe402285D3aCF218E9A8236E1)
      .getAverageBalanceBetween(_addy, start, end);
    console.log(avgBalance);
    bytes memory imageData = bytes(abi.encode(_addy, currentBalance, avgBalance, "kames.eth"));
    return ISVGRender(ERC721Storage(_erc721Storage).getSvgRender()).render(imageData);
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  // --------------------------------------
  // READS
  // --------------------------------------

  function preview(bytes memory input) external view returns (string memory) {
    return ISVGRender(ERC721Storage(_erc721Storage).getSvgRender()).render(input);
  }

  // --------------------------------------
  // WRITES
  // --------------------------------------

  /**
   * @notice Mints a new token to the given address
   * @param to address - Address to mint to`
   */
  // function mint(address to) external onlyMinter {
  //   unchecked {
  //     _mint(to, _idCounter++);
  //   }
  // }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    super.transferFrom(from, to, tokenId);
  }

  function setMinter(address minter) external onlyOwner {
    _minter = minter;
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory, bytes memory)
  {
    // (address owner, uint256 balance, uint256 claimable, string memory ens) = abi.decode(
    //   input,
    //   (address, uint256, uint256, string)
    // );

    // uint256 balance = balanceOf(msg.sender);
    uint256 claimable = 1000000000000000000;
    uint64 start = 0;
    uint64 end = uint64(block.timestamp);
    uint256 currentBalance = ERC20TWAB(ercTwab).balanceOf(msg.sender);
    uint256 avgBalance = ERC20TWAB(ercTwab).getAverageBalanceBetween(msg.sender, start, end);
    bytes memory imageData = bytes(abi.encode(msg.sender, currentBalance, avgBalance, "kames.eth"));

    bytes memory traitsData = bytes(abi.encode("0x0"));
    return (imageData, traitsData);
  }
}
