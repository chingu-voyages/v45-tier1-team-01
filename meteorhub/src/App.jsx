import "./App.css";
import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import data from "./assets/data"

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
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.year.toLowerCase().includes(query.toLowerCase()) ||
        item.recclass.toLowerCase().includes(query.toLowerCase()) 
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
    <SearchComponent
      query={query}
      filteredData={filteredData}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
      updateRange={updateRange}
    />
  );
}

export default App;
