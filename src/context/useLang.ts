import { AppLangConfig } from "@/types";

import { useCallback, useEffect, useState } from "react";

interface LangState {
  lang: Lang;
  isChecking: boolean;
  config: AppLangConfig;
}

type Lang = "es" | "en";

function useLang() {
  const userLang = window.localStorage.getItem("lang") || "es";
  const [state, setState] = useState<LangState>({
    lang: userLang as Lang,
    isChecking: true,
    config: {} as AppLangConfig,
  });

  const { lang } = state;

  useEffect(() => {
    const langCached = window.localStorage.getItem(state.lang);

    if (langCached) {
      setState((prev) => ({
        ...prev,
        config: JSON.parse(langCached) as AppLangConfig,
        isChecking: false,
      }));
    }

    loadLang();
  }, [lang]);

  const loadLang = () => {
    fetch(`/lang/${lang}.json`)
      .then((res) => res.json())
      .then((config) => {
        setState((prev) => ({
          ...prev,
          config,
        }));
        window.localStorage.setItem(state.lang, JSON.stringify(config));
        window.localStorage.setItem("lang", state.lang);
      })
      .finally(() => {
        setState((prev) => ({
          ...prev,
          isChecking: false,
        }));
      });
  };

  const changeLang = useCallback(
    (key: Lang) => {
      setState((prev) => ({
        ...prev,
        lang: key,
        isChecking: true,
      }));
    },
    [setState]
  );

  return {
    config: state,
    changeLang,
  };
}

export default useLang;
