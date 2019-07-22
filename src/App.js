import React, { useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";

const clickOutside = ftn => {
  const ref = createRef();
  const handleClick = e => {
    if (!ref.current.contains(e.target)) {
      ftn();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);
  return ref;
};

const App = () => {
  const onClickOutside = () => {
    console.log("Out!");
  };
  const ref = clickOutside(onClickOutside);
  return (
    <div className="App">
      <div ref={ref}>
        <h1>Hello Nicolas</h1>
        <h2>This should be a popup</h2>
      </div>
      <input type="text" />
    </div>
  );
};

export default App;
