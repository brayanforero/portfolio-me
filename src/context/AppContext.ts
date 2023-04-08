import { createContext } from 'react'
import { AppState, type AppStateValue } from './AppState'

export interface AppContextValue {
  state: AppStateValue
}
const AppContext = createContext<AppContextValue>({
  state: AppState
})

export default AppContext
