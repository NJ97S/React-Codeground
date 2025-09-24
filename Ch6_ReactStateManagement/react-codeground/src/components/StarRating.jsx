import { FaStar } from "react-icons/fa";

const Star = ({selected = false, onSelect = () => {} }) => (
    <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect}></FaStar>
);

const createArray = (totalStars) => [...Array(totalStars)];

export default function StarRating({ style = { background: "lightgrey" }, totalStars = 5, selectedStars = 0, onRate = () => {}, ...props}) {
    return (
        <div style={{ padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => 
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
};
