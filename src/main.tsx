import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ScrollToProvider from './context/ScrollToProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<ScrollToProvider >
<App />
</ScrollToProvider>
  </React.StrictMode>,
)
