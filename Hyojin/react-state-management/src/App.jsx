import { useState } from "react";

import "./App.css";
import colorData from "./data/color-data.json";
import ColorInfoList from "./components/color/ColorInfoList";

function App() {
  const [colors, setColors] = useState(colorData.colors);
  return (
    <>
      <h1>React-state-management</h1>
      <ColorInfoList
        colors={colors}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newRatingColor = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newRatingColor);
        }}
      />
    </>
  );
}

export default App;
