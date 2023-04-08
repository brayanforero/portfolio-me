import { type AppLangConfig } from '@/types'
import { createContext } from 'react'
import { initialLang } from './consts'

export interface LanguageContextState {
  config: {
    isChecking: boolean
    lang: AppLangConfig
    current: 'es' | 'en'
  }
  dispacher: (key: 'es' | 'en') => void
}

const LanguageContext = createContext<LanguageContextState>({
  config: {
    isChecking: false,
    current: 'es',
    lang: initialLang
  },
  dispacher: (key) => {}
})

export default LanguageContext
