import { FaStar } from "react-icons/fa"
import { useState } from "react";

const Star = ({selected = false, onSelect = () => {} }) => (
    <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect}></FaStar>
)

const createArray = (totalStars) => [...Array(totalStars)];

export default function StarRating({ style = { background: "lightgrey" }, totalStars = 5, selectedStar = 0, ...props}) {
    const [selectedStars, setSelectedStars] = useState(selectedStar);
    
    return (
        <div style={{ padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) => 
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
};
