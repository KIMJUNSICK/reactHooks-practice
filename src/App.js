import React from "react";
import useClick from "./useClick";

const App = () => {
  const onClick = () => console.log("clicked!");
  const title = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;
