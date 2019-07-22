import React from "react";
import { sections, UseTabs } from "./UseTabs";

const App = () => {
  const { currentItem, changeItem } = UseTabs(1, sections);
  return (
    <div className="App">
      {sections.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
