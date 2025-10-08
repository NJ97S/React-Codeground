import { FaStar } from "react-icons/fa";

export default function Star({ selected = false }) {
  return <FaStar color={selected} />;
}
