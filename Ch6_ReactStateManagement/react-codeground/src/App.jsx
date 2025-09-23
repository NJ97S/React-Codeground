import { useState } from 'react';

import colorData from './data/color-data.json';
import ColorList from './components/ColorList';

function App() {
  const [colors, setColors] = useState(colorData.colors);
  
  return (
    <>
      <ColorList 
        colors={colors} 
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
    </>
  );
};

export default App