import { useState } from "react";
import "../styles/tabs.css";
export default function TopTabs({ items, handleTabsToggle }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handleSelectTab = (value, index) => {
    setSelectedItemIndex(index);
    handleTabsToggle(value);
  };
  return (
    <div
      className="tabs-container"
      style={{ background: "#f8f8fa", borderRadius: "15px", display: "flex" }}
    >
      {items.map((item, index) => (
        <div
          key={item + index}
          onClick={() => handleSelectTab(item, index)}
          className={`tab${index === selectedItemIndex ? " tab-selected" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
