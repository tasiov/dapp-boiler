import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'

const connect = async () => {
  const retval = { address: null, network: null }
  const provider = await detectEthereumProvider()
  if (!provider) {
    console.error('Please install MetaMask!')
    return retval
  }
  const ethereum: any = window.ethereum
  await ethereum.request({ method: 'eth_requestAccounts' })
  const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = ethersProvider.getSigner()
  retval.address = await signer.getAddress()
  return retval
}

export default connect
