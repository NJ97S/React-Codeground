import AddForm from "./components/AddForm";
import ColorList from "./components/ColorList";

import useColors from "./hooks/useColors";

function App() {
  const { colors } = useColors();

  return (
    <>
      <AddForm />

      {colors.map((color) => (
        <ColorList key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
