import './App.css'
import StarRating from './components/StarRating'

function App() {
  return (
    <>
      <StarRating
        style={{background: "pink"}}
        totalStars={9}
        onDoubleClick={e => alert("double click!!")}
      />
    </>
  )
}

export default App