import { useState } from 'react'

import colorData from './data/color-data.json'
import ColorList from './components/ColorList';
import StarRating from './components/StarRating'

function App() {
  const [colors] = useState(colorData);
  
  return (
    <>
      <ColorList color={colors.colors}/>
      <StarRating
        style={{background: "pink"}}S
        totalStars={9}
        onDoubleClick={e => alert("double click!!")}
      />
    </>
  )
}

export default App