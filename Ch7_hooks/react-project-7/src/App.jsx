import { useEffect } from "react"
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

const words = ["gnar"];

function App() {
  useAnyKeyToRender();
  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <h1>Open the console</h1>
  );
}
// function App() {
//   // 입력 필드 값
//   const [val, set] = useState("");
//   const [phrase, setPhrase] = useState("example phrase");

//   const createPhrase = () => {
//     setPhrase(val);
//     set("");
//   };

//   // 의존 관계 배열 사용하여 호출되는 시점 제어
//   useEffect(() => {
//     console.log(`typing "${val}"`);
//   }, [val]);

//   useEffect(() => {
//     console.log(`saved phrase: "${phrase}"`);
//   }, [phrase]);

//   // 빈 의존 관계 배열은 초기 렌더링 직후 한 번만 호출됨. => 초기화에 유용!
//   // 반환하는 함수는 컴포넌트의 트리에서 제거될 때 호출
//   useEffect(() => {
//     console.log("only once after initial render");
//   }, [])

//   return (
//     <>
//       <label>Favorite phrase:</label>
//       <input 
//         value={val}
//         placeholder={phrase}
//         onChange={e => set(e.target.value)}
//       />
//       <button onClick={createPhrase}>send</button>
//     </>
//   )
// }
// 

export default App
