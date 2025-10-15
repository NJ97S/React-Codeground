import "./App.css";
import ColorInfoList from "./components/color/ColorInfoList";
import AddColorForm from "./components/color/AddColorForm";

function App() {
  return (
    <>
      <h1>React-state-management</h1>
      <AddColorForm />
      <ColorInfoList />
    </>
  );
}

export default App;
