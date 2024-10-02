import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clase01 from './clases/Clase01.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Clase01 /> */}
    <App />
  </StrictMode>,
)
