
import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(15);

const addValue = () => {
  if(counter<20){
    setCounter(counter+1);
  }
}

const removeValue = () => {
  if(counter>0){
    setCounter(counter-1);
  }
}

  return (
    <>
    <h3>chai aur code</h3>
    <h2>Counter: {counter}</h2>
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
