import { useState } from "react";
import "./DataDisplayTable.css";
import PopUp from "./PopUp";

export default function DataDisplayTable({ id, name, mass, recclass, year }) {
  const [popUpState, setPopUpState] = useState("none");

  function hidePopUp() {
    setPopUpState("none");
  }

  function showPopUp() {
    setPopUpState("flex");
  }
  return (
    <>
      <div className="data-row" key={id} onClick={showPopUp}>
        <span className="left">
          <span className="meteor-name">{name}</span>
          <span className="meteor-mass">{mass} MT</span>
        </span>
        <span className="right">
          <span className="meteor-recclass">{recclass}</span>
          <span className="meteor-year">{year}</span>
        </span>
      </div>
      <PopUp
        name={name}
        mass={mass}
        recclass={recclass}
        year={year}
        popUpState={popUpState}
        hidePopUp={hidePopUp}
      />
    </>
  );
}
