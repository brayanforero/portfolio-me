import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { LanguageProvider } from './context'
import './styles/index.css'

const rootDiv = document.getElementById('root')

if (rootDiv == null) {
  document.body.innerHTML = '<h1>No provided root element</h1>'
} else {
  ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
  )
}
