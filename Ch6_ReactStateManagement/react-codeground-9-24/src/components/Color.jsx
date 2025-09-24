import { FaTrash } from "react-icons/fa";
import StarList from "./StarList";
import { useContext } from "react";
import { ColorContext } from "../providers/ColorProvider";

export default function Color({id, rating, title, color}) {
    const { removeColor } = useContext(ColorContext)

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash/>
            </button>
            <div style={{ margin: '2em', background: color, height: '50px'}}></div>
            <StarList selectedStars={rating}/>
        </section>
    );
};
