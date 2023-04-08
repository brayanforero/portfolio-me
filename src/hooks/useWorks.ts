import { LanguageContext } from '@/context'
import { getProjects } from '@/supabase'
import { useContext, useEffect, useState } from 'react'
import { type Work } from '../types/models/core'

interface UseWorkValue {
  loading: boolean
  works: Work[]
}

function useWorks (): UseWorkValue {
  const {
    config: { current }
  } = useContext(LanguageContext)
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    window.localStorage.removeItem('projects')
    fecthWorks()
  }, [current])

  const fecthWorks = (): void => {
    setLoading(true)
    const localProjects = localStorage.getItem('projects')

    if (localProjects !== null) {
      setLoading(false)
      setWorks(JSON.parse(localProjects) as Work[])
      return
    }

    getProjects(current)
      .then(({ data }) => {
        if (data != null) {
          setWorks(data)
          window.localStorage.setItem('projects', JSON.stringify(data))
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    loading,
    works
  }
}

export default useWorks
