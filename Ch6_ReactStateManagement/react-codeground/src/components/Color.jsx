import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";

export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color}}></div>
            <StarRating selectedStars={rating} onRate={(rating) => rateColor(id, rating)}></StarRating>
        </section>
    );
};
