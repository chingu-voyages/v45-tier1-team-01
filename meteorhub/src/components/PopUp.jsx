import { useState } from "react";
import "./PopUp.css";
export default function PopUp({ name, recclass, mass, year, popUpState, hidePopUp }) {
  return (
    <aside id="overlay" style={{ display: popUpState }}>
      <div id="pop-up-card">
        <span className="meteor-prop biggie">
          <span id="meteor-name">{name}</span>
          <button onClick={hidePopUp}>X</button>
        </span>
        <span>
          <span className="meteor-prop">
            <span className="the-prop">Impact: </span>
            <progress min={0} max={100} value={32}>
              {/* a function that calculates the impact is needed for the value attribute  */}
            </progress>
          </span>
          <span className="meteor-prop">
            <span className="the-prop">Class:</span>
            <span className="the-value">{recclass}</span>
          </span>
          <span className="meteor-prop">
            <span className="the-prop">Mass:</span>
            <span className="the-value">{mass} MT</span>
          </span>
          <span className="meteor-prop">
            <span className="the-prop">Year:</span>
            <span className="the-value">{year}</span>
          </span>
        </span>
      </div>
    </aside>
  );
}
