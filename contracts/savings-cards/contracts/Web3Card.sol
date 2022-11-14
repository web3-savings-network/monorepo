//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { ERC721K } from "@erc721k/core-sol/contracts/ERC721K.sol";
import { ERC721Storage } from "@erc721k/core-sol/contracts/ERC721Storage.sol";

import { ISVGRender } from "./interfaces/ISVGRender.sol";
import { ERC20TWAB } from "./ERC20TWAB.sol";
import { Web3CardStorage } from "./Web3CardStorage.sol";

contract Web3Card is ERC721K {
  uint256 private immutable MINTER_ROLE = 1e18;
  bytes32 public constant MINTER_BURNER_ROLE = keccak256("MINTER_BURNER_ROLE");

  mapping(address => uint256) private _belongsTo;

  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage
  ) ERC721K(name, symbol, erc721Storage) {
    _idCounter++;
  }

  /* ===================================================================================== */
  /* Override Functions                                                                    */
  /* ===================================================================================== */

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721K)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function ownerOf(uint256 tokenId) public view virtual override returns (address) {
    address owner = _ownerOf[tokenId];
    if (owner == address(0)) {
      return address(0);
    }
    return owner;
  }

  function belongsTo(address account) public view virtual returns (uint256) {
    return _belongsTo[account];
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  // --------------------------------------
  // READS
  // --------------------------------------

  function preview(address account) external view returns (string memory) {
    bytes memory imageBytes = Web3CardStorage(_erc721Storage).getPreview(0, account);
    return ISVGRender(ERC721Storage(_erc721Storage).getSvgRender()).render(imageBytes);
  }

  // --------------------------------------
  // WRITES
  // --------------------------------------

  /**
   * @notice Mints a new token to the given address
   * @param to address - Address to mint to`
   */
  function mint(address to) external {
    require(hasAllRoles(msg.sender, MINTER_ROLE), "Web3Card:unauthorized");
    require(_belongsTo[to] == 0, "Web3Card:activated");
    unchecked {
      uint256 nextId = _idCounter++;
      _belongsTo[to] = nextId;
      _mint(to, nextId);
    }
  }

  /**
   * @notice Burns a token
   * @param tokenId uint256 - Token ID to burn
   */
  function burn(uint256 tokenId) external {
    require(hasAllRoles(msg.sender, MINTER_ROLE), "Web3Card:unauthorized");
    address owner = ownerOf(tokenId);
    _belongsTo[owner] = 0;
    _burn(tokenId);
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    _belongsTo[to] = tokenId;
    super.transferFrom(from, to, tokenId);
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _tokenData(uint256 _tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory, bytes memory)
  {
    bytes memory imageBytes = Web3CardStorage(_erc721Storage).getImageBytes(_tokenId);
    bytes memory traitsBytes = Web3CardStorage(_erc721Storage).getTraitsBytes(_tokenId);
    return (imageBytes, traitsBytes);
  }
}
