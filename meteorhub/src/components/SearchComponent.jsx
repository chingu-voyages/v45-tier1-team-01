import { useState } from "react";
import "./SearchComponent.css";
import SummaryMetric from "./SummaryMetric";
import DataDisplayTable from "./DataDisplayTable";
import FilterRangeComponent from "./FilterRangeComponent";

export default function SearchComponent({
  query,
  filteredData,
  onChangeHandler,
  onClickHandler,
  updateRange
}) {
  const [openFilterModal, setOpenFilterModal] = useState(false);

  function toggleFilterModal(e) {
    setOpenFilterModal(!openFilterModal);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => onChangeHandler(e)}
      />
      <button onClick={(e) => toggleFilterModal()}>Filter by Range</button>
      {openFilterModal ? <FilterRangeComponent toggleFilterModal={toggleFilterModal} updateRange={updateRange}/> : null}
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
