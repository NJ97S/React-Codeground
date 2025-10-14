import StarRating from "../star/StarRating";

export default function Color({ colorTitle, fillColor, colorRating }) {
  return (
    <section>
      <h2>{colorTitle}</h2>
      <div style={{ height: 50, backgroundColor: fillColor }}></div>
      <StarRating selectedStars={colorRating} />
    </section>
  );
}
