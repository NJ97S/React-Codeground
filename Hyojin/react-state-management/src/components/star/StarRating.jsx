import { useState } from "react";

import Star from "./Star";

export default function StarRating({
  totalStars = 5,
  style = {},
  onDoubleClick = () => console.warn("⚠️ onSelected handler not provided!"),
}) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div style={style} onDoubleClick={onDoubleClick}>
        {Array.from({ length: totalStars }, (_, i) => (
          <Star
            key={i}
            selected={i < selectedStars}
            onSelected={() => setSelectedStars(i + 1)}
          />
        ))}
        <p>
          {selectedStars} / {totalStars}
        </p>
      </div>
    </>
  );
}
