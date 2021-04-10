// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/proxy/Initializable.sol';

contract VenueImplementation is Initializable {
    uint8 public royaltyRate;
    uint256 public basePrice;
    string public queryId;
    address public servicer;

    function initialize(
        uint8 _royaltyRate,
        uint256 _basePrice,
        string calldata _queryId,
        address _servicer
    ) public initializer {
        require(_royaltyRate < 100);
        royaltyRate = _royaltyRate;
        basePrice = _basePrice;
        queryId = _queryId;
        servicer = _servicer;
    }
}
