import {FaStar} from "react-icons/fa"

export default function Star({selected = false, onClicked = () => {console.log("클릭됐다임마")}}) {
  return (
    <>
      <FaStar color={selected ? "red" : "grey"} onClick={onClicked}/>
    </>
  )
}