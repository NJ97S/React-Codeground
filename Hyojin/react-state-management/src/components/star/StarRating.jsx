import Star from "./Star";

export default function StarRating({ totalStars = 5 }) {
  const createStarArray = (length) => [...Array(length)];
  return createStarArray(totalStars).map((n, i) => <Star key={i} />);
}
