import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorProvider from './providers/ColorProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ColorProvider>
    <App />
  </ColorProvider>
)
