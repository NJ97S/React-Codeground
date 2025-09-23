import { FaStar } from "react-icons/fa";

interface StarProps {
  isSelected: boolean;
  onClick: () => void;
}

const Star = ({ isSelected = false, onClick }: StarProps) => {
  return <FaStar color={isSelected ? "skyblue" : "gray"} onClick={onClick} />;
};

export default Star;
