import { useState } from "react";

import Star from "./Star";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);

  return (
    <>
      {Array.from({ length: totalStars }, (_, i) => (
        <Star key={i} selected={i < selectedStars} />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
}
