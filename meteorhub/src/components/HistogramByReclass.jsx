export default function HistogramByReclass({ filteredData }) {
  const recclass = filteredData.map((ele) => ele.recclass);
  const dict = {};

  for (let i = 0; i < recclass.length; i++) {
    dict[recclass[i]] = dict[recclass[i]] === undefined ? 1 : dict[recclass[i]] + 1;
  }

  const ansArr = Object.entries(dict);

  let max = 0;

  for (let i = 0; i < ansArr.length; i++) {
    if (max < ansArr[i][1]) {
      max = ansArr[i][1];
    }
  }

  return (
    <div className="histogram">
      {!!ansArr &&
        ansArr.map((ele) => {
          return (
            <div key={ele[0]} style={{ borderBottom: "1px solid black" }}>
              <div
                className="histogram-bar"
                style={{
                  height: `${(200 * ele[1]) / max}px`,
                }}
              >
                <p style={{}}>
                  {ele[0]},{ele[1]}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
