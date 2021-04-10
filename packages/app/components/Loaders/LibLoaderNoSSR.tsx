import dynamic from 'next/dynamic'
import { map } from 'lodash'

export default function LibLoaderNoSSR(libs) {
  map(libs, (lib) => dynamic(import(lib), { ssr: false }))
  return null
}
