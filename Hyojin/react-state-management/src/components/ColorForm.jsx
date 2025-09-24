import { useState } from "react";

export default function ColorForm({onCreate}) {
  const [title, setTitle] = useState("");
  const [newColor, setNewColor] = useState("#000000");
  const newCreateColor = (e) => {
    e.preventDefault();
    console.log(title)
    console.log(newColor)
    onCreate(title, newColor)
    setTitle("")
    setNewColor("#000000")
  }
  return (
  <>
    <form onSubmit={newCreateColor}>
      <input type='text' placeholder='새로운 Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <input type='color' value={newColor} onChange={(e) => setNewColor(e.target.value)}></input>
      <button>Submit</button>
    </form>
  </>
  )
}
