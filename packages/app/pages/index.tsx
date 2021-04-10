import AppLayout from '../components/Layouts/AppLayout'
import LibLoaderNoSSR from '../components/Loaders/LibLoaderNoSSR'
import { EthersContextProvider } from 'contexts/EthersContextProvider'
import { PageKeys } from 'types/pages'

const clientOnlyLibs = ['lib/ipfs']

export default function App({ pageKey }) {
  return (
    <EthersContextProvider>
      <AppLayout pageKey={pageKey || PageKeys.Home} />
      <LibLoaderNoSSR libs={clientOnlyLibs} />
    </EthersContextProvider>
  )
}
