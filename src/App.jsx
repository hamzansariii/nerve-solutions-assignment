import { useEffect, useState } from "react";
import "./App.css";
import { strategyArrayData } from "./constants/strategyArray";
import DateDropdown from "./components/dateDropdown";
import StrategyCards from "./components/strategyCards";
import TopTabs from "./components/topTabs";

function App() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState("24-Apr-2024");

  const handleDateSelect = (value) => {
    setSelectedDate(value);
  };

  const handleTabsToggle = (value) => {
    setSelectedView(value);
  };

  return (
    <>
      <main>
        <TopTabs
          items={strategyArrayData.map((item) => item.View)}
          handleTabsToggle={handleTabsToggle}
        />
        <DateDropdown
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
        />
        <StrategyCards
          selectedView={selectedView}
          selectedDate={selectedDate}
        />
      </main>
    </>
  );
}

export default App;
