import "../styles/card.css";
import { strategyArrayData } from "../constants/strategyArray";
import { useEffect, useState } from "react";
export default function StrategyCards({ selectedView, selectedDate }) {
  const [strategyCountMap, setStrategyCountMap] = useState(null);
  useEffect(() => {
    if (selectedView && selectedDate && strategyArrayData) {
      const filteredStrategy = strategyArrayData.find(
        (strategy) => strategy.View === selectedView
      );

      if (filteredStrategy && filteredStrategy["Value"]?.[selectedDate]) {
        const countMap = filteredStrategy["Value"][selectedDate].reduce(
          (acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          },
          {}
        );

        setStrategyCountMap(countMap);
      } else {
        setStrategyCountMap({});
      }
    }
  }, [selectedDate, selectedView]);

  return (
    <div style={{ width: "90%", padding: "10px" }}>
      {strategyCountMap &&
        Object.keys(strategyCountMap).map((item, index) => (
          <div
            key={index + item}
            className="card"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ fontWeight: "bold" }}>{item}</div>
            <div style={{ color: "#92929b" }}>
              <span className="dot"></span>
              {strategyCountMap[item]}{" "}
              {strategyCountMap[item] > 1 ? "Strategies" : "Strategy"}
            </div>
          </div>
        ))}
    </div>
  );
}
