import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);
  const IncrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello ReactHooks! </h1>
      <h2>{item}</h2>
      <br />
      <button onClick={IncrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;
