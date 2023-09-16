import { useState } from "react";
import { FixedSizeList } from "react-window";
import "./SearchComponent.css";
import SummaryMetric from "./SummaryMetric";
import DataDisplayTable from "./DataDisplayTable";
import FilterRangeComponent from "./FilterRangeComponent";
import FilterTag from "./FilterTag";

export default function SearchComponent({
  query,
  filteredData,
  onChangeHandler,
  updateRange,
  minMass,
  maxMass,
  resetFilter,
}) {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [showRangeTag, setShowRangeTag] = useState(false);

  function toggleFilterModal() {
    setOpenFilterModal(!openFilterModal);
  }

  function toggleRangeTag() {
    setShowRangeTag(!showRangeTag);
  }

  const Row = ({ index, style }) => {
    const meteorData = filteredData[index];

    return (
      <div style={style}>
        <DataDisplayTable
          id={index}
          name={meteorData.name}
          mass={meteorData.mass}
          recclass={meteorData.recclass}
          year={meteorData.year}
        />
      </div>
    );
  };

  return (
    <>
      <main>
        <h1>MeteorHub</h1>
        <div id="search-wrapper">
          <input
            type="search"
            id="searchbar"
            placeholder="Search"
            value={query}
            onChange={(e) => onChangeHandler(e)}
          />
          <button className="button" onClick={(e) => toggleFilterModal()}>
            Filter
          </button>
          {openFilterModal ? (
            <FilterRangeComponent
              updateRange={updateRange}
              toggleFilterModal={toggleFilterModal}
              toggleRangeTag={toggleRangeTag}
            />
          ) : null}
          {showRangeTag ? (
            <FilterTag
              minMass={minMass}
              maxMass={maxMass}
              toggleRangeTag={toggleRangeTag}
              resetFilter={resetFilter}
            />
          ) : null}
        </div>
        <div id="data-display-table">
          <FixedSizeList height={360} itemCount={filteredData.length} itemSize={100}>
            {Row}
          </FixedSizeList>
        </div>
      </main>
      <SummaryMetric filteredData={filteredData} />
    </>
  );
}
