import { FaStar } from "react-icons/fa";

export default function Star({
  selected = false,
  onSelected = () => console.warn("⚠️ onSelected handler not provided!"),
}) {
  return <FaStar color={selected ? "green" : "grey"} onClick={onSelected} />;
}
