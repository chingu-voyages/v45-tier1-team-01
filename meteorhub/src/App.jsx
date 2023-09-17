import "./App.css";
import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import data from "./assets/data";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [minMass, setMinMass] = useState(0);
  const [maxMass, setMaxMass] = useState(0);
  const [initialRange, setInitialRange] = useState({
    minRange: 0,
    maxRange: 0,
  });

  function onChangeHandler(e) {
    setQuery(e.target.value);
  }

  function updateRange(minValue, maxValue) {
    minValue === "" ? minMass : setMinMass(parseInt(minValue));
    maxValue === "" ? maxMass : setMaxMass(parseInt(maxValue));
  }

  function updateInitialRange(minValue, maxValue) {
    setInitialRange({
      minRange: minValue,
      maxRange: maxValue,
    });
  }

  function resetFilter() {
    setMinMass(initialRange.minRange);
    setMaxMass(initialRange.maxRange);
  }

  useEffect(() => {
    const minInitialMass = data.reduce((prev, curr) => {
      return parseInt(curr?.mass) < parseInt(prev.mass) ? curr : prev;
    }).mass;
    const maxInitialMass = data.reduce((prev, curr) => {
      return parseInt(prev?.mass) > parseInt(curr.mass) ? prev : curr;
    }).mass;
    setMinMass(parseInt(minInitialMass));
    setMaxMass(parseInt(maxInitialMass));
    updateInitialRange(minInitialMass, maxInitialMass);
  }, []);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (trimmedQuery===""){
      setFilteredData(data);
    } else{
      const filteredResults = data.filter(
        (item) =>
          parseInt(item.mass) >= minMass &&
          parseInt(item.mass) <= maxMass &&
          (item.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
            item.year.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
            item.recclass.toLowerCase().includes(trimmedQuery.toLowerCase()))
      );
      setFilteredData(filteredResults);
    }
  }, [data, minMass, maxMass, query]);

  return (
    <>
      <SearchComponent
        query={query}
        filteredData={filteredData}
        onChangeHandler={onChangeHandler}
        updateRange={updateRange}
        minMass={minMass}
        maxMass={maxMass}
        resetFilter={resetFilter}
      />
    </>
  );
}

export default App;
