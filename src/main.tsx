import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.sass'
import { GlobalProvider } from './Context/HomeContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App/>
    </GlobalProvider>
  </React.StrictMode>
)
