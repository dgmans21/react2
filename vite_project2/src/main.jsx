import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/global.css'
import App from './app/page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
