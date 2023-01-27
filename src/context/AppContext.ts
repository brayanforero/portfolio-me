import { createContext } from "react";
import { AppStateValue } from "./AppState";

export interface AppContextValue {
  state: AppStateValue;
}
const AppContext = createContext<AppContextValue>({} as AppContextValue);

export default AppContext;
