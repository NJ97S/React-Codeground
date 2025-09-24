import { useContext, useRef } from "react";
import { ColorContext } from "../providers/ColorProvider";

export default function AddColorForm() {
    const { addColor } = useContext(ColorContext)

    const textRef = useRef("");
    const colorRef = useRef("#000000");

    const submit = e => {
        e.preventDefault();

        addColor(textRef.current.value, colorRef.current.value)

        textRef.current.value = "";
        colorRef.current.value = "#000000";
    };

    return (
        <form onSubmit={submit}>
            <input type="text" ref={textRef} required/>
            <input type="color" ref={colorRef} required/>
            <button>Add</button>
        </form>
    );
};
