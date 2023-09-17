import { useState } from "react";
import { FixedSizeList } from "react-window";
import "./SearchComponent.css";
import SummaryMetric from "./SummaryMetric";
import DataDisplayTable from "./DataDisplayTable";
import FilterRangeComponent from "./FilterRangeComponent";
import FilterTag from "./FilterTag";
import HistogramByReclass from "./HistogramByReclass";
import HistogramByYear from "./HistogramByYear";

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
  const vwHeight = "50vw";

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
          <FixedSizeList
            height={window.innerHeight * 0.5}
            itemCount={filteredData.length}
            itemSize={100}
          >
            {Row}
          </FixedSizeList>
        </div>

        <SummaryMetric filteredData={filteredData} />
      </main>
      <aside>
        <HistogramByYear filteredData={filteredData} />
        <HistogramByReclass filteredData={filteredData} />
      </aside>
    </>
  );
}

// import React from 'react';
// import { FixedSizeList } from 'react-window';

// const MyComponent = () => {
//   const vwHeight = '50vw'; // Set the height as a string with 'vw' unit

//   return (
//     <FixedSizeList
//       height={vwHeight}
//       itemCount={100}
//       itemSize={50}
//       width={300}
//     >
//       {({ index, style }) => (
//         <div style={style}>Item {index}</div>
//       )}
//     </FixedSizeList>
//   );
// };

// export default MyComponent;

// import React, { useEffect, useState } from 'react';
// import { FixedSizeList } from 'react-window';

// const MyComponent = () => {
//   const [vwHeight, setVwHeight] = useState(0);

//   useEffect(() => {
//     // Calculate the height based on viewport width (e.g., 50% of viewport width)
//     const calculatedHeight = window.innerWidth * 0.5;
//     setVwHeight(calculatedHeight);

//     // Update the height when the window is resized
//     const handleResize = () => {
//       const newHeight = window.innerWidth * 0.5;
//       setVwHeight(newHeight);
//     };

//     // Attach the event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <FixedSizeList
//       height={vwHeight}
//       itemCount={100}
//       itemSize={50}
//       width={300}
//     >
//       {({ index, style }) => (
//         <div style={style}>Item {index}</div>
//       )}
//     </FixedSizeList>
//   );
// };

// export default MyComponent;
