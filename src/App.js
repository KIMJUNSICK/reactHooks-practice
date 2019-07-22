import React, { useState } from "react";
import UseInput from "./UseInput";

const App = () => {
  const notAt = value => !value.includes("@");

  const name = UseInput("Mr.", notAt);
  return (
    <div className="App">
      <h1>Hello ReactHooks!</h1>
      <input placeholder="name!" {...name} />
    </div>
  );
};

export default App;
