import { createRoot } from "react-dom/client";
import { createContext } from "react";

import "./index.css";
import App from "./App.jsx";
import colordata from "./data/color-data.json";

export const ColorContext = createContext();

createRoot(document.getElementById("root")).render(
  <ColorContext.Provider value={{ colors: colordata.colors }}>
    <App />
  </ColorContext.Provider>
);
