import "./App.css";
import React, { useState, useEffect, useContext, createContext } from "react";
import SearchComponent from "./components/SearchComponent";
import data from "./assets/data";

export const FilterRangeContext = createContext(null);

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [minMass, setMinMass] = useState(0);
  const [maxMass, setMaxMass] = useState(0);
  
  function onChangeHandler(e) {
    setQuery(e.target.value);
  }

  function onClickHandler(e) {
    setQuery("");
  }

  function updateRange(minValue, maxValue) {
    minValue === "" ? minMass : setMinMass(parseInt(minValue));
    maxValue === "" ? maxMass : setMaxMass(parseInt(maxValue));
  }

  useEffect(() => {
    const minInitialMass = data.reduce((prev, curr) => {
      return parseInt(curr?.mass) < parseInt(prev.mass) ? curr : prev}). mass;
    const maxInitialMass = data.reduce((prev, curr) => {
      return parseInt(prev?.mass) > parseInt(curr.mass) ? prev : curr}). mass;
    setMinMass(parseInt(minInitialMass));
    setMaxMass(parseInt(maxInitialMass));
  },[])

  useEffect(() => {  
    const trimmedQuery = query.trim();
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        item.year.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        item.recclass.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [data, query]);

  useEffect(() => {
    const filteredResults = data.filter(
      (item) => 
        (parseInt(item.mass) >= minMass) && (parseInt(item.mass) <= maxMass) 
    );
    setFilteredData(filteredResults);    
  },[data, minMass, maxMass]);

  return (
    <FilterRangeContext.Provider value={{minMass, maxMass}}>
    <SearchComponent
      query={query}
      filteredData={filteredData}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      updateRange={updateRange}
    />
    </FilterRangeContext.Provider>
  );
}

export default App;
