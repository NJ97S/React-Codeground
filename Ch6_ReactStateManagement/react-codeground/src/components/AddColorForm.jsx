import { useRef } from "react";

export default function AddColorForm({onNewColor = () => {}}) {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        // 디폴트 동작인 현재 URL로 폼 엘리먼트에 저장된 값이 본문에 들어 있는 POST 요청을 보내는 것을 막기 위함.
        e.preventDefault();

        const title = txtTitle.current.value;
        const color = hexColor.current.value;

        onNewColor(title, color);
        
        // 참조 타입을 사용해 DOM 노드의 속성을 직접 변경 가능
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };

    return (
        <form onSubmit={submit}>
            <input type="text" ref={txtTitle} placeholder="color title..." required/>
            <input type="color" ref={hexColor} required/>
            <button>ADD</button>
        </form>
    );
};
