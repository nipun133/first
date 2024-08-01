import React, { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Function to handle button click
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;