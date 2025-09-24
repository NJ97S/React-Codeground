import colorData from "./data/color-data.json"
import ColorList from "./components/ColorList.jsx"
import AddColorForm from "./components/AddColorForm.jsx"

function App() {

  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
}

export default App
