import { useRef, useState } from "react";

export default function AddColorForm({onNewColor = () => {}}) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        // 디폴트 동작인 현재 URL로 폼 엘리먼트에 저장된 값이 본문에 들어 있는 POST 요청을 보내는 것을 막기 위함.
        e.preventDefault();

        onNewColor(title, color);
        
        setTitle("");
        setColor("#000000");
    };

    return (
        <form onSubmit={submit}>
            <input 
                type="text" 
                placeholder="color title..." 
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input 
                type="color"
                onChange={e => setColor(e.target.value)}
                required/>
            <button>ADD</button>
        </form>
    );
};
