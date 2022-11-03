// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

// Global
import { Base64 } from "base64-sol/base64.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { SVGLibrary } from "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol";
import { SVGRegistry } from "@erc721k/periphery-sol/contracts/svg/SVGRegistry.sol";
// Local
import { svg } from "../svg/svg.sol";
import { svgUtils } from "../svg/svgUtils.sol";

contract PoolTogetherV0Render is Ownable {
  bytes32 private constant BYTES32_WEB3_ASSETS =
    0x574542335f415353455453000000000000000000000000000000000000000000;
  bytes32 private constant BYTES32_TOKEN_USDC =
    0x544f4b454e5f5553444300000000000000000000000000000000000000000000;
  bytes32 private constant BYTES32_TOKEN_POOL =
    0x544f4b454e5f504f4f4c00000000000000000000000000000000000000000000;
  bytes32 private constant BYTES32_LOGO_POOL =
    0x4c4f474f5f504f4f4c0000000000000000000000000000000000000000000000;
  bytes32 private constant BYTES32_ICON_NETWORK_TEST =
    0x49434f4e5f4e4554574f524b5f54455354000000000000000000000000000000;
  bytes32 private constant BYTES32_ICON_NETWORK_ETHEREUM =
    0x49434f4e5f4e4554574f524b5f455448455245554d0000000000000000000000;
  bytes32 private constant BYTES32_ICON_NETWORK_OPTIMISM =
    0x49434f4e5f4e4554574f524b5f4f5054494d49534d0000000000000000000000;
  bytes32 private constant BYTES32_ICON_NETWORK_ARBITRUM =
    0x49434f4e5f4e4554574f524b5f415242495452554d0000000000000000000000;
  bytes32 private constant BYTES32_ICON_NETWORK_POLYGON =
    0x49434f4e5f4e4554574f524b5f504f4c59474f4e000000000000000000000000;
  string private constant ENCODING = "data:image/svg+xml;base64, ";

  address public svgLibrary;
  address public svgRegistry;

  constructor(address svgLibrary_, address svgRegistry_) {
    svgLibrary = svgLibrary_;
    svgRegistry = svgRegistry_;
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  function render(bytes memory input) external view returns (string memory) {
    return string(abi.encodePacked(ENCODING, Base64.encode(bytes(_construct(input)))));
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */
  function _construct(bytes memory input) internal view returns (string memory) {
    (
      address owner,
      uint256 balance,
      uint256 avgBalance2Weeks,
      uint256 avgBalance8Weeks,
      uint256 avgBalance26Weeks,
      string memory emoji
    ) = abi.decode(input, (address, uint256, uint256, uint256, uint256, string));

    // string memory emoji = unicode"text";
    string memory tagline = "Web3 Savings Network";

    return
      string.concat(
        '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300" fill="#633EF7" style="font-family: sans-serif;" >',
        svg.rect(
          string.concat(
            svg.prop("x", "0.00195312"),
            svg.prop("width", "500"),
            svg.prop("height", "300"),
            svg.prop("fill", "url(#paint0_linear_213_860)")
          )
        ),
        svg.rect(
          string.concat(
            svg.prop("x", "0"),
            svg.prop("width", "500"),
            svg.prop("height", "500")
            // svg.prop("fill", string(svgUtils.getRgba(_colorFill)))
          )
        ),
        '<g mask="url(#mask0_213_860)"> <ellipse opacity="0.1" cx="93" cy="300" rx="230" ry="145" fill="black"/> <ellipse opacity="0.08" cx="550" cy="-119" rx="450" ry="247" fill="black"/> </g>',
        renderHeader(balance),
        renderFooter(owner, avgBalance8Weeks, emoji, tagline),
        '<defs><style>.cls-1{fill:#FFF;}.text-shadow-md {text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);}</style><linearGradient id="myGradient" gradientTransform="rotate(90)"> <stop offset="5%" stop-color="gold" /> <stop offset="95%" stop-color="red" /> </linearGradient></defs>',
        "</svg>"
      );
  }

  function renderHeader(uint256 balance) internal view returns (string memory) {
    return string.concat(chanceDetails(balance), cardDetails());
  }

  function cardDetails() internal view returns (string memory) {
    return
      string.concat(
        svg.g(
          string.concat(svg.prop("transform", "translate(350,30)")),
          _registry(BYTES32_WEB3_ASSETS, abi.encode(BYTES32_LOGO_POOL))
        )
      );
  }

  function chanceDetails(uint256 balance) internal view returns (string memory) {
    return
      string.concat(
        // svg.g(
        //   string.concat(svg.prop("transform", "translate(40,50)")),
        //   _registry(BYTES32_WEB3_ASSETS, abi.encode(BYTES32_TOKEN_USDC))
        // ),
        svg.text(
          string.concat(
            svg.prop("x", "7.5%"),
            svg.prop("y", "62.5"),
            svg.prop("font-size", "18"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "start"),
            svg.prop("fill", "white")
          ),
          string.concat(unicode"🏆", " Chance")
        ),
        svg.text(
          string.concat(
            svg.prop("x", "7.5%"),
            svg.prop("y", "100"),
            svg.prop("font-size", "32"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "start"),
            svg.prop("fill", "white")
          ),
          string(svgUtils.round2Txt(balance, 6, 2))
        )
      );
  }

  function avgBalanceDetails(uint256 avgBalance8Weeks) internal view returns (string memory) {
    return
      string.concat(
        svg.text(
          string.concat(
            svg.prop("x", "95%"),
            svg.prop("y", "50%"),
            svg.prop("font-size", "14"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "end"),
            svg.prop("fill", "white")
          ),
          "Avg 60 Day Balance"
        ),
        svg.text(
          string.concat(
            svg.prop("x", "95%"),
            svg.prop("y", "60%"),
            svg.prop("font-size", "24"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "end"),
            svg.prop("fill", "white")
          ),
          string(svgUtils.round2Txt(avgBalance8Weeks, 6, 2))
        )
      );
  }

  function renderFooter(
    address account,
    uint256 avgBalance8Weeks,
    string memory emoji,
    string memory tagline
  ) internal view returns (string memory) {
    return
      string.concat(
        accountDetails(account, emoji, tagline),
        renderNetwork(),
        avgBalanceDetails(avgBalance8Weeks)
      );
  }

  function accountDetails(
    address account,
    string memory emoji,
    string memory tagline
  ) internal view returns (string memory) {
    return
      string.concat(
        svg.text(
          string.concat(
            svg.prop("x", "7.5%"),
            svg.prop("y", "67.5%"),
            svg.prop("font-size", "24"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "start"),
            svg.prop("fill", "white")
          ),
          emoji
        ),
        svg.text(
          string.concat(
            svg.prop("x", "7.5%"),
            svg.prop("y", "77.5%"),
            svg.prop("font-size", "28"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "start"),
            svg.prop("fill", "white")
          ),
          svgUtils.splitAddress(account)
        ),
        svg.text(
          string.concat(
            svg.prop("x", "7.5%"),
            svg.prop("y", "87.5%"),
            svg.prop("font-size", "14"),
            svg.prop("font-weight", "300"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "start"),
            svg.prop("fill", "white")
          ),
          tagline
        )
      );
  }

  function renderNetwork() internal view returns (string memory) {
    bytes32 network;
    string memory name;
    if (block.chainid == 1) {
      name = "Ethereum";
      network = BYTES32_ICON_NETWORK_ETHEREUM;
    } else if (block.chainid == 10) {
      name = "Optimism";
      network = BYTES32_ICON_NETWORK_OPTIMISM;
    } else if (block.chainid == 137) {
      name = "Polygon";
      network = BYTES32_ICON_NETWORK_POLYGON;
    } else if (block.chainid == 42161) {
      name = "Arbitrum";
      network = BYTES32_ICON_NETWORK_ARBITRUM;
    } else {
      name = "Unknown";
      network = BYTES32_ICON_NETWORK_TEST;
      // network = BYTES32_ICON_NETWORK_ETHEREUM;
    }

    return
      string.concat(
        svg.text(
          string.concat(
            svg.prop("x", "85%"),
            svg.prop("y", "80%"),
            svg.prop("font-size", "18"),
            svg.prop("alignment-baseline", "middle"),
            svg.prop("text-anchor", "end"),
            svg.prop("fill", "white")
          ),
          name
        ),
        svg.g(
          string.concat(svg.prop("transform", "translate(440,225)")),
          _registry(BYTES32_WEB3_ASSETS, abi.encode(network))
        )
      );
  }

  function _lib(bytes32 _key, bytes memory _value) internal view returns (string memory) {
    return SVGLibrary(svgLibrary).execute(_key, _value);
  }

  function _registry(bytes32 _key, bytes memory _value) internal view returns (string memory) {
    return SVGRegistry(svgRegistry).fetch(_key, _value);
  }
}
