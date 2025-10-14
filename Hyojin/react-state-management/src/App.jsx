import { useState } from "react";

import "./App.css";
import colorData from "./data/color-data.json";
import ColorInfoList from "./components/color/ColorInfoList";

function App() {
  const [colors] = useState(colorData.colors);
  return (
    <>
      <h1>React-state-management</h1>
      <ColorInfoList colors={colors} />
    </>
  );
}

export default App;
