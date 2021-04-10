import hre from 'hardhat'
import '@nomiclabs/hardhat-ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

const deployContract = async (contractName: string, ...args: any[]) => {
  const Contract = await hre.ethers.getContractFactory(contractName)
  const contractInstance = await Contract.deploy(...args)
  await contractInstance.deployed()
  console.log(`Deployed ${contractName} at address ${contractInstance.address}`)
  return contractInstance
}

const deployVenueContracts = async (servicerAccount: SignerWithAddress) => {
  const venueImplementation = await deployContract('VenueImplementation')
  const venueUpgradeableBeacon = await deployContract('VenueUpgradeableBeacon', venueImplementation.address)

  const registerVenueArgs = [
    5, // royaltyRate
    25, // basePrice
    'test-venue', // queryId,
    servicerAccount.address, // servicer
  ]
  await venueUpgradeableBeacon.registerVenue(...registerVenueArgs)
  await venueUpgradeableBeacon.registerVenue(...registerVenueArgs)
  console.log(`Registered venues: [${await venueUpgradeableBeacon.getVenueAddresses()}]`)
}

async function main() {
  const accounts = await hre.ethers.getSigners()
  const operatorAccount = accounts[0]
  const servicerAccount = accounts[1]
  await deployVenueContracts(servicerAccount)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
