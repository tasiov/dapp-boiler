import { Layout, Card, Steps } from 'antd'
import styles from './RegisterVenueContent.module.less'

const { Step } = Steps

export default function RegisterVenue() {
  return (
    <Layout>
      <Card className={styles.cardContainer}></Card>
      <Card className={styles.cardContainer}>
        <Steps current={0}>
          <Step title="Register venue" description="Enter in the on-chain venue data." />
          <Step title="Create venue profile" description="Fill out your venue profile." />
        </Steps>
      </Card>
      <Card className={styles.cardContainer}>
        <div>Input</div>
      </Card>
    </Layout>
  )
}
