import React from 'react'
import connect from 'lib/ethers/connect'

interface EthersContextInterface {
  address: string | null
  network: string | null
  init: (() => void) | null
}

const EthersContext = React.createContext<EthersContextInterface>({
  address: null,
  network: null,
  init: null,
})

class EthersContextProvider extends React.Component<React.ReactFragment, EthersContextInterface> {
  constructor(props) {
    super(props)
    this.state = {
      address: null,
      network: null,
      init: this.init,
    }
  }

  init = async () => {
    const { address, network } = await connect()
    this.setState({ address, network })
  }

  render() {
    return <EthersContext.Provider value={this.state}>{this.props.children}</EthersContext.Provider>
  }
}

export { EthersContextProvider, EthersContext }
