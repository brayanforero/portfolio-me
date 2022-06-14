import { Work } from '../types/models/core'

export const getWorks = async (): Promise<Work[]> => {
  const res = await fetch('/db.json')
  const { items } = await res.json()
  return items as Work[]
}
