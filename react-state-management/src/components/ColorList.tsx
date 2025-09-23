import { FaTrash } from "react-icons/fa";

import Star from "./Star";

import useColors from "../hooks/useColors";
import type { ColorType } from "../types/type";

interface ColorListProps {
  color: ColorType;
}

const ColorList = ({ color }: ColorListProps) => {
  const { rateColor, deleteColor } = useColors();

  return (
    <>
      <h1>{color.title}</h1>

      <button onClick={() => deleteColor(color.id)}>
        <FaTrash />
      </button>
      <div style={{ height: "40px", backgroundColor: color.color }} />

      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          isSelected={i < color.rating}
          onClick={() => rateColor(color.id, i + 1)}
        />
      ))}
      <div>{color.rating}/5</div>
    </>
  );
};

export default ColorList;
