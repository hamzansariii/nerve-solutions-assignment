import { useState } from "react";
import { dateArrayData } from "../constants/dateArray";
import "../styles/dateDropdown.css";

export default function DateDropdown({ selectedDate, handleDateSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownOptionClicked = (value) => {
    handleDropdownToggle();
    handleDateSelect(value);
  };

  return (
    <>
      <div
        className="card"
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={handleDropdownToggle}
      >
        <div style={{ fontWeight: "bold" }}>{selectedDate}</div>
        <div style={{ color: "#92929b", fontSize: "16px" }}>
          {isDropdownOpen ? "^" : "v"}
        </div>
      </div>
      <div
        className="select-options"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ width: "90%", padding: "10px" }}>
          {isDropdownOpen &&
            dateArrayData.map((item, index) => (
              <div
                key={index + item}
                className="box"
                onClick={() => handleDropdownOptionClicked(item)}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
