import { useState } from "react";
import "./SearchComponent.css";
import SummaryMetric from "./SummaryMetric";
import DataDisplayTable from "./DataDisplayTable";
import FilterRangeComponent from "./FilterRangeComponent";
import FilterTag from "./FilterTag";

export default function SearchComponent({
  query,
  filteredData,
  onChangeHandler,
  onClickHandler,
  updateRange,
  minMass,
  maxMass,
  resetFilter
}) {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [showRangeTag, setShowRangeTag] = useState(false)

  function toggleFilterModal() {
    setOpenFilterModal(!openFilterModal);
  }

  function toggleRangeTag() {
    setShowRangeTag(!showRangeTag);
  }
  return (
    <>
    <div id="search-wrapper">
        <input
          type="text"
          id="searchbar"
          placeholder="Search"
          value={query}
          onChange={(e) => onChangeHandler(e)}
        />
        <button className="button" onClick={(e) => toggleFilterModal()}>Filter</button>
        {openFilterModal ? 
          <FilterRangeComponent 
            updateRange={updateRange}
            toggleFilterModal={toggleFilterModal}             
            toggleRangeTag={toggleRangeTag}/> 
          : null}
        {showRangeTag ? 
          <FilterTag 
            minMass={minMass}
            maxMass={maxMass}
            toggleRangeTag={toggleRangeTag}
            resetFilter={resetFilter}/>
          : null}
        <button className="button" onClick={(e) => onClickHandler(e)}>
          Clear
        </button>
      </div>
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
      <SummaryMetric filteredData={filteredData} />
    </>
  );
}
