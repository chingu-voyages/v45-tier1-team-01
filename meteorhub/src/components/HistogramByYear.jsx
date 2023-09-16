export default function HistogramByYear({ filteredData }) {
  let arr = [];
  let max = 0;
  filteredData[0] && createHistogramData();

  function createHistogramData() {
    arr = new Array(1163);
    // 0 -> 861
    // 1162-> 2023
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
      filteredData[i] &&
        filteredData[i].year &&
        arr[Number(filteredData[i].year.substring(0, 4)) - 861]++;
    }

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }

  return (
    <div className="histogram" id="by-year">
      {!!arr &&
        arr.map((ele, index) => {
          if (ele > 0) {
            return (
              <div key={index + 861}>
                <div
                  style={{
                    height: `${(300 * ele) / max}px`,
                    border: "2px solid black",
                    backgroundColor: "grey",
                  }}
                >
                  {index + 861},{ele}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
