import HomeContent from './HomeContent'
import RegisterVenueContent from './RegisterVenueContent'
import { PageKeys } from 'types/pages'

export default function ContentManager({ pageKey }) {
  switch (pageKey) {
    case PageKeys.RegisterVenue:
      return <RegisterVenueContent />
    default:
      return <HomeContent />
  }
}
