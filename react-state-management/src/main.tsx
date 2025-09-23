import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import ColorProvider from "./contexts/providers/ColorProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
