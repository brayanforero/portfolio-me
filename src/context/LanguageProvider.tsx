import LanguageContext, { type LanguageContextState } from './LanguageContext'
import useLang from './useLang'

interface Props {
  children: React.ReactNode
}

function LanguageProvider ({ children }: Props): JSX.Element {
  const { config, changeLang } = useLang()
  const state: LanguageContextState = {
    config: {
      isChecking: config.isChecking,
      lang: config.config,
      current: config.lang
    },
    dispacher: changeLang
  }

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
