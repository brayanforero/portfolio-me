import { useEffect, useState } from "react";
import { AppState, AppStateValue } from "./AppState";
import debouce from "just-debounce-it";
function useInitContext() {
  const [state, setState] = useState<AppStateValue>(AppState);

  useEffect(() => {
    const handler = debouce(() => {
      console.log("Despues de 800ms");
      setState({ ...state, screenSize: window.innerWidth });
    }, 600);

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return { state };
}

export default useInitContext;
