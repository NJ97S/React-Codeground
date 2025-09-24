import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import ColorProvider from './providers/ColorProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ColorProvider>
    <App />
  </ColorProvider>
)
