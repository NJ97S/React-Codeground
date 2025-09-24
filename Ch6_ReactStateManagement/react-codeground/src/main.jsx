import { createRoot } from 'react-dom/client'
import ColorProvider from './provider/ColorProvider.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ColorProvider>
    <App />
  </ColorProvider>,
)