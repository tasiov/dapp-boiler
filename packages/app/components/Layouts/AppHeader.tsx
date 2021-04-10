import { Layout, Typography } from 'antd'
import ConnectButton from '../Buttons/ConnectButton'
import styles from './AppHeader.module.less'

const { Title } = Typography
const { Header } = Layout

export default function AppHeader() {
  return (
    <Header className={styles.header}>
      <div className={`${styles.appHeader} ${styles.main}`}>
        <div className={styles.logo} />
        <Title className={styles.title} level={4}>
          dapp_boiler
        </Title>
      </div>
      <ConnectButton />
    </Header>
  )
}
