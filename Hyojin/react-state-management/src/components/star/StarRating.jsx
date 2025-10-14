import Star from "./Star";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  style = {},
  onDoubleClick = () => console.warn("⚠️ onSelected handler not provided!"),
}) {
  return (
    <>
      <div style={{ padding: 10, ...style }} onDoubleClick={onDoubleClick}>
        {Array.from({ length: totalStars }, (_, i) => (
          <Star key={i} selected={i < selectedStars} />
        ))}
        <p>
          {selectedStars} / {totalStars}
        </p>
      </div>
    </>
  );
}
