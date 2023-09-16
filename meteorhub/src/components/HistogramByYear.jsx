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
    <div className="histogram">
      {!!arr &&
        arr.map((ele, index) => {
          if (ele > 0) {
            return (
              <div key={index + 861} style={{ borderBottom: "2px solid black" }}>
                <div
                  style={{
                    height: `${(200 * ele) / max}px`,
                    border: "2px solid black",
                    borderBottom: "none",
                    backgroundColor: "grey",
                    width: "max-content",
                    margin: "0 0.2rem",
                  }}
                >
                  <p>
                    {index + 861},{ele}
                  </p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
