import React, { useState, useEffect } from "react";
import useTitle from "./useTitle";

const App = () => {
  const titleUpater = useTitle("Loding...");
  setTimeout(() => {
    titleUpater("JS's world");
  }, 5000);

  return (
    <div className="App">
      <div>Hello, it's Me</div>
    </div>
  );
};

export default App;
