import { ReactNode } from "react";
import LanguageContext from "./LanguageContext";
import useLang from "./useLang";

function LanguageProvider({ children }: { children: ReactNode }) {
  const { config, changeLang } = useLang();
  const state: LanguageContext = {
    config: {
      isChecking: config.isChecking,
      lang: config.config,
      current: config.lang,
    },
    dispacher: changeLang,
  };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
