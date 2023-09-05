import { useEffect, useState } from "react";
import HistogramByYear from "./HistogramByYear";
import HistogramByReclass from "./HistogramByReclass";

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
    <>
      <div
        className="summaryMetric"
        style={{
          border: "1px solid whitesmoke",
          width: "200px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <p>Strikens : {totalNumberOfStrikes}</p>
        <p>Total Mass : {totalMass}</p>
      </div>
      <HistogramByYear filteredData={filteredData} />
      <HistogramByReclass filteredData={filteredData} />
    </>
  );
}
