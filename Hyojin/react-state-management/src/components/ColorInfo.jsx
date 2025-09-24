import { useState } from "react"
import Star from "./Star"
import { FaTrash } from "react-icons/fa"

export default function ColorInfo({totalStars = 5, colorData, onDelete}) {
  const [selectedStars, setSelectedStars] = useState(colorData.rating);
  return (
    <>
      <h1>{colorData.title}</h1>
      <button onClick={() => onDelete(colorData.id)}>
        <FaTrash ></FaTrash>
      </button>
      <div style={{height: '50px', background: colorData.color}}></div>
      {Array.from({length:totalStars}, (_, i) => (<Star key={i} selected={selectedStars > i} onClicked={() => (setSelectedStars(i + 1))}/>))}
      <p>{selectedStars} / {totalStars}</p>
    </>
  )
}
