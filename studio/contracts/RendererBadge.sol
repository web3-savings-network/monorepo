//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import './SVG.sol';
import './Utils.sol';

contract Renderer {
    function render(uint256 _tokenId) public pure returns (string memory) {
        string memory _treeCount = '1.2';
        string memory _txCount = '14555553';

        return
            string.concat(
                '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" fill="none" style="font-family:sans-serif;" >',
                svg.rect(
                    string.concat(
                        svg.prop('x', '0'),
                        svg.prop('width', '500'),
                        svg.prop('height', '500'),
                        svg.prop('transform', 'rotate(90 526.995 20.9999)('),
                        svg.prop('fill', '#35D07F')
                    )
                ),
                svg.g(
                    string.concat(
                        svg.prop('d', ''),
                        svg.prop('y', '0')
                        // svg.prop('width', '500'),
                        // svg.prop('height', '500'),
                        // svg.prop('transform', 'rotate(90 526.995 20.9999)('),
                        // svg.prop('fill', '#35D07F')
                    ),
                    '<svg x="5%" y="5%" width="100" height="50" fill="#FFF" id="Celo_Logotype" data-name="Celo Logotype" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3952 1575"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 1</title><path id="Type" class="cls-1" d="M2817,1089l86-27V350l-86,27ZM1825,657c54,0,104,24,136,64l35-81c-46-44-107-65-171-65-148,0-250,117-249,246,1,140,111,254,249,254,70,0,123-21,163-50V926c-42,42-103,67-156,67-80,0-170-65-170-172C1662,722,1740,657,1825,657Zm572-82c-148,0-234,117-234,246,0,140,111,254,249,254,70,0,123-21,163-50V926c-42,42-103,67-156,67-71,0-149-44-165-137h377V823C2631,685,2540,575,2397,575Zm929,0c-138,0-250,112-250,250s112,250,250,250,250-112,250-250S3464,575,3326,575Zm-928,82c67,0,138,42,144,123H2254C2260,699,2331,657,2398,657Zm928,336a168,168,0,1,1,168-168A167.72,167.72,0,0,1,3326,993Z"/><path id="Bottom_Ring" data-name="Bottom Ring" class="cls-1" d="M751,1105c154.64,0,280-125.36,280-280S905.64,545,751,545,471,670.36,471,825,596.36,1105,751,1105Zm0,95c-207.1,0-375-167.9-375-375S543.9,450,751,450s375,167.9,375,375S958.1,1200,751,1200Z"/><path id="Top_Ring" data-name="Top Ring" class="cls-1" d="M951,905c154.64,0,280-125.36,280-280S1105.64,345,951,345,671,470.36,671,625,796.36,905,951,905Zm0,95c-207.1,0-375-167.9-375-375S743.9,250,951,250s375,167.9,375,375S1158.1,1000,951,1000Z"/></svg>,'
                ),
                // ----------------
                // Header
                // ----------------
                // svg.text(
                //     string.concat(
                //         svg.prop('x', '7.5%'),
                //         svg.prop('y', '10%'),
                //         svg.prop('font-size', '26'),
                //         svg.prop('font-family', 'EB Garamond'),
                //         // svg.prop('dominant-baseline', 'middle'),
                //         svg.prop('text-anchor', 'start'),
                //         svg.prop('fill', 'white')
                //     ),
                //     'CELO'
                // ),
                svg.text(
                    string.concat(
                        svg.prop('x', '92.5%'),
                        svg.prop('y', '12%'),
                        svg.prop('font-size', '26'),
                        svg.prop('font-family', '"serif"'),
                        svg.prop('font-weight', 'lighter'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    'Impact Card'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '92.5%'),
                        svg.prop('y', '18.5%'),
                        svg.prop('font-size', '18'),
                        svg.prop('font-family', '"serif"'),
                        svg.prop('font-weight', 'bold'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    'Environment'
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
                    unicode'🍀'
                ),
                // ----------------
                // Trees Planted
                // ----------------
                svg.text(
                    string.concat(
                        svg.prop('x', '7.5%'),
                        svg.prop('y', '80%'),
                        svg.prop('font-size', '26'),
                        svg.prop('font-family', 'EB Garamond'),
                        // svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'start'),
                        svg.prop('fill', 'white')
                    ),
                    'Trees Planted'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '90%'),
                        svg.prop('y', '80%'),
                        svg.prop('font-size', '32'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    _treeCount
                ),
                // ----------------
                // Transactions
                // ----------------
                svg.text(
                    string.concat(
                        svg.prop('x', '7.5%'),
                        svg.prop('y', '90%'),
                        svg.prop('font-size', '26'),
                        svg.prop('font-family', 'EB Garamond'),
                        // svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'start'),
                        svg.prop('fill', 'white')
                    ),
                    'Transactions'
                ),
                svg.text(
                    string.concat(
                        svg.prop('x', '90%'),
                        svg.prop('y', '90%'),
                        svg.prop('font-size', '32'),
                        svg.prop('font-family', 'EB Garamond'),
                        svg.prop('dominant-baseline', 'middle'),
                        svg.prop('text-anchor', 'end'),
                        svg.prop('fill', 'white')
                    ),
                    _txCount
                ),
                '<defs><style>.cls-1{fill:#FFF;}.cls-2{fill:#fbcc5c;}.cls-3{fill:#35d07f;}.cls-4{fill:#5ea33b;}</style></defs'
            );
    }

    function example() external pure returns (string memory) {
        return render(1);
    }
}

// 323 x 204
