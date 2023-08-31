import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import DataDisplayTable from "./DataDisplayTable";

export default function SearchComponent() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("./src/assets/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
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
    <>
        <input type="text" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />
        <button className="clear" onClick={e => setQuery('')}>Clear</button>
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
    )
}
