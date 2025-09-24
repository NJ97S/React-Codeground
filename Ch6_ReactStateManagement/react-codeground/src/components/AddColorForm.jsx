import { useContext } from "react";

import useInput from "../hooks/useInput";
import { ColorContext } from "../provider/ColorProvider";

export default function AddColorForm() {
    const { addColor } = useContext(ColorContext);

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        // 디폴트 동작인 현재 URL로 폼 엘리먼트에 저장된 값이 본문에 들어 있는 POST 요청을 보내는 것을 막기 위함.
        e.preventDefault();

        addColor(titleProps.value, colorProps.value);
        
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text" 
                placeholder="color title..." 
                required
            />
            <input 
                {...colorProps}
                type="color"
                required/>
            <button>ADD</button>
        </form>
    );
};
