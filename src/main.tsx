import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootDiv = document.getElementById('root')


if (rootDiv === null) { document.body.innerHTML = `<h1>Root Element has not provided</h1>` }

else {
  createRoot(rootDiv).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}