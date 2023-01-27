import { useEffect, useState } from "react";
import { AppStateValue } from "./AppState";
import debouce from "just-debounce-it";
function useInitContext() {
  const [state, setState] = useState<AppStateValue>({
    screenSize: window.innerWidth,
  });

  useEffect(() => {
    const handler = debouce(() => {
      console.log("Despues de 800ms");
      setState({ screenSize: window.innerWidth });
    }, 600);

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return { state };
}

export default useInitContext;
