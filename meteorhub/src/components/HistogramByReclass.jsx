export default function HistogramByReclass({ filteredData }) {
  let arrWithIgnoredDuplicates = filteredData.map((ele) => ele.recclass);

  for (let i = 0; i < arrWithIgnoredDuplicates.length; i++) {
    let instance = arrWithIgnoredDuplicates[i];
    for (let j = i + 1; j < arrWithIgnoredDuplicates.length; j++) {
      if (instance === arrWithIgnoredDuplicates[j]) {
        arrWithIgnoredDuplicates[j] = "ignore";
      }
    }
  }

  let arr = [];

  for (let i = 0; i < arrWithIgnoredDuplicates.length; i++) {
    if (arrWithIgnoredDuplicates[i] !== "ignore") {
      arr.push(arrWithIgnoredDuplicates[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let instance = arr[i];
    let count = 0;
    for (let j = 0; j < filteredData.length; j++) {
      if (instance === filteredData[j].recclass) {
        count++;
      }
    }
    arr[i] = [instance, count];
  }

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i][1]) {
      max = arr[i][1];
    }
  }

  return (
    <div
      className="histogram"
      style={{
        display: "flex",
        height: "300px",
        border: "2px solid blue",
        padding: "15px",
        marginTop: "30px",
        alignItems: "flex-end",
        marginBottom: "30px"
      }}
    >
      {!!arr &&
        arr.map((ele) => {
          return (
            <div key={ele[0]}>
              <div
                style={{
                  height: `${(300 * ele[1]) / max}px`,
                  border: "2px solid black",
                  backgroundColor: "grey",
                }}
              >
                {ele[0]},{ele[1]}
              </div>
            </div>
          );
        })}
    </div>
  );
}
