export default function HistogramByReclass({ filteredData }) {
  const recclass = filteredData.map((ele) => ele.recclass);
  const dict = {};

  for (let i = 0; i < recclass.length; i++) {
    dict[recclass[i]] =
      dict[recclass[i]] === undefined ? 1 : dict[recclass[i]] + 1;
  }

  const ansArr = Object.entries(dict);

  let max = 0;

  for (let i = 0; i < ansArr.length; i++) {
    if (max < ansArr[i][1]) {
      max = ansArr[i][1];
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
        marginBottom: "30px",
      }}
    >
      {!!ansArr &&
        ansArr.map((ele) => {
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
