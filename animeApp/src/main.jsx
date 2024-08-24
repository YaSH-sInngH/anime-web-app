import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimeContextProvider } from './context/Anime.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeContextProvider>
      <App />
    </AnimeContextProvider>
  </StrictMode>,
)
