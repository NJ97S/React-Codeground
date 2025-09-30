import { useState, type PropsWithChildren } from "react";

import ColorContext from "../ColorContext";
import type { ColorType, newColorType } from "../../types/type";

import data from "../../dummy.json";

const ColorProvider = ({ children }: PropsWithChildren) => {
  const [colors, setColors] = useState<ColorType[]>(data.colors);

  const addColor = (colorData: newColorType) => {
    const newColor = {
      id: Math.random(),
      title: colorData.title,
      color: colorData.color,
      rating: 0,
    };

    setColors((prev) => [newColor, ...prev]);
  };

  const rateColor = (id: string | number, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );

    setColors(newColors);
  };

  const deleteColor = (id: string | number) => {
    const newColors = colors.filter((color) => color.id !== id);

    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, deleteColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
