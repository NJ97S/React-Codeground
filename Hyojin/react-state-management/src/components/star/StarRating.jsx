import Star from "./Star";

export default function StarRating({ totalStars = 5 }) {
  return Array.from({ length: totalStars }, (_, i) => <Star key={i} />);
}
