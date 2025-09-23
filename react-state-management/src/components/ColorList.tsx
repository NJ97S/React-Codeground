import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import Star from "./Star";

import type { ColorType } from "../types/type";

interface ColorListProps {
  color: ColorType;
  onClick: () => void;
}

const ColorList = ({ color, onClick }: ColorListProps) => {
  const [rating, setRating] = useState(color.rating);

  const handleClickStar = (idx: number) => {
    setRating(idx + 1);
  };

  return (
    <>
      <h1>{color.title}</h1>

      <button onClick={onClick}>
        <FaTrash />
      </button>
      <div style={{ height: "40px", backgroundColor: color.color }} />

      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          isSelected={i < rating}
          onClick={() => handleClickStar(i)}
        />
      ))}
      <div>{rating}/5</div>
    </>
  );
};

export default ColorList;
