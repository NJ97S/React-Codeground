import { createContext } from "react";

import type { ColorType, newColorType } from "../types/type";

interface ColorContextValue {
  colors: ColorType[];
  addColor: (colorData: newColorType) => void;
  rateColor: (id: string | number, rating: number) => void;
  deleteColor: (id: string | number) => void;
}

const ColorContext = createContext<ColorContextValue>({
  colors: [],
  addColor: () => {},
  rateColor: () => {},
  deleteColor: () => {},
});

export default ColorContext;
