import { useState } from "react";
import { v4 } from "uuid";

import "./App.css";
import colorData from "./data/color-data.json";
import ColorInfoList from "./components/color/ColorInfoList";
import AddColorForm from "./components/color/AddColorForm";

function App() {
  const [colors, setColors] = useState(colorData.colors);
  return (
    <>
      <h1>React-state-management</h1>
      <AddColorForm
        onNewColorInfo={(title, color) => {
          const newColors = {
            id: v4(),
            rating: 0,
            title: title,
            color: color,
          };
          setColors([newColors, ...colors]);
        }}
      />
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
