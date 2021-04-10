import App from './index'
import { PageKeys } from 'types/pages'

export default function Reservations() {
  return App({ pageKey: PageKeys.Reservations })
}
