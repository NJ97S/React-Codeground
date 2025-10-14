import { useState } from "react";

export default function AddColorForm({ onNewColorInfo = (f) => f }) {
  const [newTitle, setNewTitle] = useState("");
  const [newColor, setNewColor] = useState("#000000");

  const submitNewColor = (e) => {
    e.preventDefault();
    onNewColorInfo(newTitle, newColor);
    setNewTitle("");
    setNewColor("#000000");
  };

  return (
    <form onSubmit={submitNewColor}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="색깔 이름"
        required
      />
      <input
        type="color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
        required
      />
      <button>추가하기</button>
    </form>
  );
}
