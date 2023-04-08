import { useState } from 'react'
import { AppState, type AppStateValue } from './AppState'
function useInitContext (): { state: AppStateValue } {
  const [state] = useState<AppStateValue>(AppState)

  return { state }
}

export default useInitContext
