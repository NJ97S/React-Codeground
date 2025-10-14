import StarRating from "../star/StarRating";

import { FaTrash } from "react-icons/fa";

export default function Color({
  colorId,
  colorTitle,
  fillColor,
  colorRating,
  onRemove = (f) => f,
}) {
  return (
    <section>
      <h2>{colorTitle}</h2>
      <button onClick={() => onRemove(colorId)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: fillColor }}></div>
      <StarRating selectedStars={colorRating} />
    </section>
  );
}
