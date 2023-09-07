import "./PopUp.css";
export default function PopUp() {
  return (
    <aside id="overlay">
      <div id="pop-up-card">
        <span className="meteor-prop biggie">
          <span id="meteor-name">Abee</span>
          <button>X</button>
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
            <span className="the-value">EH4</span>
          </span>
          <span className="meteor-prop">
            <span className="the-prop">Mass:</span>
            <span className="the-value">107000 MT</span>
          </span>
          <span className="meteor-prop">
            <span className="the-prop">Year</span>
            <span className="the-value">1952</span>
          </span>
        </span>
      </div>
    </aside>
  );
}
