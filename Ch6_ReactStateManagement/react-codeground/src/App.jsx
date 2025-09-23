import { useState } from 'react'

import colorData from './data/color-data.json'
import ColorList from './components/ColorList';
import StarRating from './components/StarRating'

function App() {
  const [colors] = useState(colorData);
  
  return (
    <>
      <ColorList colors={colors.colors}/>
    </>
  )
}

export default App