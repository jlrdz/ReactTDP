import "./styles.css";
import {useState} from "react"

export default function App() {

  const [count, setCount] = useState({count:0, name: 'Dave'})
  function increment(){
    setCount((prevValue) => ({...prevValue, count: prevValue.count + 1}))
  }
  function incrementPlusTen(){
    setCount((prevValue) => ({...prevValue, count: prevValue.count + 10}))
  }
  function decrement(){
    setCount(count-1)
  }

  function handleChange(event){
    // setCount(parseInt(event.target.value))
    setCount((prevValue) => ({...prevValue, count: +event.target.value}))

  }

  return (
    <div className="App">
      <button onClick={()=>setCount({count: count.count - 10})}>&lt;&lt;</button>
      <button onClick={()=>setCount({count: count.count - 1})}>&lt;</button>

      <input type="number" value={count.count} onChange={handleChange}/>
      <button onClick={increment}>&gt;</button>
      <button onClick={incrementPlusTen}>&gt;&gt;</button>
    </div>
  );
}
