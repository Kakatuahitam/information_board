import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Interfaces/App.tsx'
import './Interfaces/index.css'
// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
