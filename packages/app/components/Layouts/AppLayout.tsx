import Link from 'next/link'
import { Layout, Menu } from 'antd'
import { HomeOutlined, CalendarOutlined, BookOutlined, ShopOutlined, SettingOutlined } from '@ant-design/icons'
import AppHeader from './AppHeader'
import ContentManager from '../Content/ContentManager'
import { PageKeys } from 'types/pages'
import styles from './AppLayout.module.less'

const { Sider, Content } = Layout
const { SubMenu } = Menu

export default function AppLayout({ pageKey }) {
  const subMenuKey = 'ADVANCED'
  const defaultOpenKeys = pageKey === PageKeys.RegisterVenue ? [subMenuKey] : []
  return (
    <Layout className={styles.appLayout}>
      <AppHeader />
      <Layout>
        <Sider className={styles.sider} width={200}>
          <Menu className={styles.menu} defaultSelectedKeys={[pageKey]} defaultOpenKeys={defaultOpenKeys} mode="inline">
            <Menu.Item key={PageKeys.Home} icon={<HomeOutlined />}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={PageKeys.Reservations} icon={<CalendarOutlined />}>
              <Link href="/reservations">
                <a>Reservations</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={PageKeys.Marketplace} icon={<ShopOutlined />}>
              <Link href="/marketplace">
                <a>Marketplace</a>
              </Link>
            </Menu.Item>
            <Menu.Divider />
            <SubMenu key={subMenuKey} icon={<SettingOutlined />} title="Advanced">
              <Menu.Item key={PageKeys.RegisterVenue} icon={<BookOutlined />}>
                <Link href="/registervenue">
                  <a>Register Venue</a>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Divider />
          </Menu>
        </Sider>
        <Layout>
          <ContentManager pageKey={pageKey} />
        </Layout>
      </Layout>
    </Layout>
  )
}
