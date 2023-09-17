import { useEffect, useState } from "react";
import "./SummaryMetric.css";

export default function SummaryMetric({ filteredData }) {
  let [totalNumberOfStrikes, setTotalNumberOfStrikes] = useState(0);
  let [totalMass, setTotalMass] = useState(0);

  useEffect(
    function () {
      setTotalNumberOfStrikes((prevValue) => filteredData.length);
      setTotalMass((prevValue) => {
        if (filteredData.length === 0) return 0;
        let tempTotalMass = 0;
        for (let i = 0; i < filteredData.length; i++) {
          if (filteredData[i].mass) {
            tempTotalMass += Number(filteredData[i].mass);
          }
        }
        return tempTotalMass;
      });
    },
    [filteredData]
  );

  return (
    <div className="summaryMetric">
      <p className="total-val">
        <span className="val-name">Total Strikes</span>
        <span>{totalNumberOfStrikes}</span>
      </p>
      <p className="total-val">
        <span className="val-name">Total Mass</span>
        <span>{totalMass}</span>
      </p>
    </div>
  );
}
