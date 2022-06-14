import { useEffect, useState } from 'react'
import { getWorks } from '../services/work'
import { Work } from '../types/models/core'

function useWorks() {
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fecthWorks()
  }, [])
  const fecthWorks = async () => {
    try {
      setLoading(true)
      const worksFromDb = await getWorks()
      setWorks(worksFromDb)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      console.error('Unfetch works error')
    }
  }

  return {
    loading,
    works,
  }
}

export default useWorks
