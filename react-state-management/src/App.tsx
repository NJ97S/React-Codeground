import { useState } from "react";

import AddForm from "./components/AddForm";
import ColorList from "./components/ColorList";

import type { ColorType, newColorType } from "./types/type";

import data from "./dummy.json";

function App() {
  const [colors, setColors] = useState<ColorType[]>(data.colors);

  const addColor = (colorData: newColorType) => {
    const newColor = {
      id: Math.random(),
      title: colorData.title,
      color: colorData.color,
      rating: 0,
    };

    setColors((prev) => [...prev, newColor]);
  };

  const deleteColor = (id: string | number) => {
    const newColors = colors.filter((color) => color.id !== id);

    setColors(newColors);
  };

  return (
    <div>
      <AddForm addColor={addColor} />

      {colors.map((color) => (
        <ColorList
          key={color.id}
          color={color}
          onClick={() => deleteColor(color.id)}
        />
      ))}
    </div>
  );
}

export default App;
