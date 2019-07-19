import React, { Component, useState } from "react";

const App = () => {
  const [potato, Pizza] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e => {
    const {
      target: { value }
    } = e;
    setEmail(value);
  };

  return (
    <>
      <div>{potato}</div>
      <button onClick={() => Pizza(potato + 1)}>Increment</button>
      <button onClick={() => Pizza(potato - 1)}>Decrement</button>
      <input
        placeholder="Write your Email"
        value={email}
        onChange={updateEmail}
      />
    </>
  );
};

export default App;
