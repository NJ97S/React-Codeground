import { createContext, useState } from "react";
import { v4 } from "uuid";

import colordata from "../data/color-data.json";

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colordata.colors);

  const addColor = (title, color) => {
    const newColors = {
      id: v4(),
      rating: 0,
      title: title,
      color: color,
    };
    setColors([newColors, ...colors]);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newRatingColor = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newRatingColor);
  };

  return (
    <ColorContext.Provider
      value={{ colors, setColors, addColor, removeColor, rateColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}
