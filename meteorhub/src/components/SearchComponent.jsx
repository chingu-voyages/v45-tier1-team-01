import "./SearchComponent.css";
import SummaryMetric from "./SummaryMetric";
import DataDisplayTable from "./DataDisplayTable";

export default function SearchComponent({
  query,
  filteredData,
  onChangeHandler,
  onClickHandler,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => onChangeHandler(e)}
      />
      <button className="clear" onClick={(e) => onClickHandler(e)}>
        Clear
      </button>
      <SummaryMetric filteredData={filteredData} />
      <div id="data-display-table">
        {filteredData.map((meteorData, id) => (
          <DataDisplayTable
            key={id}
            id={id}
            name={meteorData.name}
            mass={meteorData.mass}
            recclass={meteorData.recclass}
            year={meteorData.year}
          />
        ))}
      </div>
    </>
  );
}
