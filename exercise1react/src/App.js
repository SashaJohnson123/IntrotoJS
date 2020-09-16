import React, { useState } from 'react';
import './App.css';

function App() {

  // variables 
  const [count, setCount] = useState(0);

  // methods 
  const add = () => { setCount(count + 1) };
  const minus = () => { setCount(count - 1) };

  // templates
  return (
    <div class="App">
      <h2>Counter</h2>
      <button onClick={add}>Add</button>
      <span> {count} </span>
      <button onClick={minus}>Minus</button>
    </div>
  )
}

export default App;
