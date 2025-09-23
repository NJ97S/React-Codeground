import AddForm from "./components/AddForm";
import ColorList from "./components/ColorList";

import useColors from "./hooks/useColors";

function App() {
  const { colors } = useColors();

  return (
    <div>
      <AddForm />

      {colors.map((color) => (
        <ColorList key={color.id} color={color} />
      ))}
    </div>
  );
}

export default App;
