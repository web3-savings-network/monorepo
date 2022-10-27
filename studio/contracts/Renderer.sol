//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import './SVG.sol';
import './Utils.sol';

contract Renderer {
    function render(uint256 _tokenId) public pure returns (string memory) {
        string memory _accountNonce = '42';
        string memory _balanceCelo = '4,241.32';

        return
            string.concat(
                '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300" viewBox="0 0 500 300" fill="none" style="font-family:sans-serif;" >',
                svg.rect(
                    string.concat(
                        svg.prop('x', '0'),
                        svg.prop('width', '500'),
                        svg.prop('height', '500'),
                        svg.prop('transform', 'rotate(90 526.995 20.9999)('),
                        svg.prop('fill', '#35D07F')
                    )
                ),
                // ----------------
                // Header
                // ----------------
                svg.text(
                    string.concat(
                        svg.prop('x', '7.5%'),
                        svg.prop('y', '15%'),
                        svg.prop('font-size', '26'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'start'),
                        svg.prop('fill', 'white')
                    ),
                    'CELO'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '93.5%'),
                        svg.prop('y', '15%'),
                        svg.prop('font-size', '26'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('font-weight', 'lighter'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    'Climate Impact Card'
                ),
                // ----------------
                // Center
                // ----------------
                svg.text(
                    string.concat(
                        svg.prop('x', '50%'),
                        svg.prop('y', '50%'),
                        svg.prop('font-family', 'unset'),
                        svg.prop('font-size', '22'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'middle'),
                        svg.prop('fill', 'white')
                    ),
                    unicode'⛰️'
                ),
                // ----------------
                // Bottom
                // ----------------
                svg.g(
                    string.concat(
                        svg.prop('x', '2.5%'),
                        svg.prop('y', '85%')
                        // svg.prop('width', '500'),
                        // svg.prop('height', '500'),
                        // svg.prop('transform', 'rotate(90 526.995 20.9999)('),
                        // svg.prop('fill', '#35D07F')
                    ),
                    '<svg x="2.5%" y="77.5%" width="100" height="50" fill="#FFF" id="Celo_Logotype" data-name="Celo Logotype" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3952 1575"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 1</title><path id="Bottom_Ring" data-name="Bottom Ring" class="cls-1" d="M751,1105c154.64,0,280-125.36,280-280S905.64,545,751,545,471,670.36,471,825,596.36,1105,751,1105Zm0,95c-207.1,0-375-167.9-375-375S543.9,450,751,450s375,167.9,375,375S958.1,1200,751,1200Z"/><path id="Top_Ring" data-name="Top Ring" class="cls-1" d="M951,905c154.64,0,280-125.36,280-280S1105.64,345,951,345,671,470.36,671,625,796.36,905,951,905Zm0,95c-207.1,0-375-167.9-375-375S743.9,250,951,250s375,167.9,375,375S1158.1,1000,951,1000Z"/></svg>,'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '11.5%'),
                        svg.prop('y', '85%'),
                        svg.prop('font-size', '38'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'start'),
                        svg.prop('fill', 'white')
                    ),
                    _accountNonce
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '90%'),
                        svg.prop('y', '85%'),
                        svg.prop('font-size', '28'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    _balanceCelo
                ),
                '<defs><style>.cls-1{fill:#FFF;}.cls-2{fill:#fbcc5c;}.cls-3{fill:#35d07f;}.cls-4{fill:#5ea33b;}</style></defs>',
                '</svg>'
            );
    }

    function example() external pure returns (string memory) {
        return render(1);
    }
}

// 323 x 204
