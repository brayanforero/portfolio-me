import { Work } from '../types/models/core'
const URL_API = 'https://api-porftfolio.up.railway.app/api'
export const getWorks = async (): Promise<Work[]> => {
  const res = await fetch(URL_API)
  const { items } = await res.json()
  return items as Work[]
}
