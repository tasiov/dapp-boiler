// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/proxy/UpgradeableBeacon.sol';
import '@openzeppelin/contracts/proxy/BeaconProxy.sol';

contract VenueUpgradeableBeacon is UpgradeableBeacon {
    address[] private venueAddresses;

    event InitVenue(address venueAddress, uint8 royaltyRate, uint256 basePrice, string queryId, address servicer);

    constructor(address _implementation) UpgradeableBeacon(_implementation) {}

    function registerVenue(
        uint8 _royaltyRate,
        uint256 _basePrice,
        string calldata _queryId,
        address _servicer
    ) public {
        bytes memory data =
            abi.encodeWithSignature(
                'initialize(uint8,uint256,string,address)',
                _royaltyRate,
                _basePrice,
                _queryId,
                _servicer
            );
        BeaconProxy venueBeaconProxy = new BeaconProxy(address(this), data);
        address venueAddress = address(venueBeaconProxy);
        venueAddresses.push(venueAddress);
        emit InitVenue(venueAddress, _royaltyRate, _basePrice, _queryId, _servicer);
    }

    function getVenueAddresses() public view returns (address[] memory) {
        return venueAddresses;
    }
}
