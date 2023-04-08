import { type PostgrestError } from '@supabase/supabase-js'
import { type Work } from '@/types'
import supabase from './store'

interface SupabaseProjectResult {
  data: Work[] | null
  error: PostgrestError | null
}

export const getProjects = async (key: 'es' | 'en' = 'es'): Promise<SupabaseProjectResult> => {
  const { data, error } = await supabase
    .from('projects')
    .select()
    .filter('lang', 'eq', key)

  return { data, error }
}
