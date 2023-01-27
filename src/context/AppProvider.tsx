import { ReactNode } from "react";
import AppContext from "./AppContext";
import useInitContext from "./useInitContext";

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  const { state } = useInitContext();
  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
