import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <title>Login</title>
    <meta name="description" content="Frontend-only login page for a mock site" />
    <App />
  </StrictMode>,
)
