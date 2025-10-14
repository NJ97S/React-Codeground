import { useInput } from "../../hooks/useInput";

export default function AddColorForm({ onNewColorInfo = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submitNewColor = (e) => {
    e.preventDefault();
    onNewColorInfo(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submitNewColor}>
      <input type="text" {...titleProps} placeholder="색깔 이름" required />
      <input type="color" {...colorProps} required />
      <button>추가하기</button>
    </form>
  );
}
