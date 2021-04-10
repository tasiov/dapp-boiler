import React from 'react'
import { Button, Typography } from 'antd'
import { EthersContext } from 'contexts/EthersContextProvider'
import styles from './ConnectButton.module.less'

const { Text } = Typography

class ConnectButton extends React.Component {
  static contextType = EthersContext
  render() {
    return (
      <Button className={styles.connectButton} type="primary" shape="round" onClick={this.context.init}>
        <Text className={styles.buttonText} ellipsis>
          {this.context.address || 'Connect'}
        </Text>
      </Button>
    )
  }
}

export default ConnectButton
