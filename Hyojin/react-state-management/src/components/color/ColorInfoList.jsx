import { useContext } from "react";

import { ColorContext } from "../../main";
import Color from "./Color";

export default function ColorInfoList({
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  const { colors } = useContext(ColorContext);
  if (!colors.length) return <div>표시할 색상이 없습니다.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          colorId={color.id}
          colorTitle={color.title}
          fillColor={color.color}
          colorRating={color.rating}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
