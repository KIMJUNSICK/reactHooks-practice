import { useState } from "react";

export const sections = [
  {
    tab: "Section 1",
    content: "junsik"
  },
  {
    tab: "Section 2",
    content: "kim"
  }
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
