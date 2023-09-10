import "./App.css";
import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import data from "./assets/data";

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  function onChangeHandler(e) {
    setQuery(e.target.value);
  }

  function onClickHandler(e) {
    setQuery("");
  }

  useEffect(() => {
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.year.toLowerCase().includes(query.toLowerCase()) ||
        item.recclass.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [data, query]);
  return (
    <SearchComponent
      query={query}
      filteredData={filteredData}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
    />
  );
}

export default App;
