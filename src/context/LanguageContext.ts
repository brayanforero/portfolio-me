import { AppLangConfig } from "@/types";
import { createContext } from "react";

interface LanguageContext {
  config: {
    isChecking: boolean;
    lang: AppLangConfig;
    current: "es" | "en";
  };
  dispacher: (key: "es" | "en") => void;
}

const LanguageContext = createContext<LanguageContext>({} as LanguageContext);

export default LanguageContext;
