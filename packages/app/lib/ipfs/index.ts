import Ipfs from 'ipfs'

declare const window: {
  Ipfs: typeof Ipfs
}
window.Ipfs = Ipfs

const ipfsClient = await Ipfs.create()

export { ipfsClient }
