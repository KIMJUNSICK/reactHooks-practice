import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hello, it's Me</div>
      <input ref={potato} placeholder="lala" />
    </div>
  );
};

export default App;
