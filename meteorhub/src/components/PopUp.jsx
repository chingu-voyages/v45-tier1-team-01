import "./PopUp.css";
export default function PopUp() {
  return (
    <aside id="overlay">
      <div id="pop-up-card">
        <span>
          <span id="meteor-name"></span>
          <button>X</button>
        </span>
        <span className="meteor-prop">
          <span className="the-prop"></span>
          <span className="the-value"></span>
        </span>
        <span className="meteor-prop">
          <span className="the-prop"></span>
          <span className="the-value"></span>
        </span>
        <span className="meteor-prop">
          <span className="the-prop"></span>
          <span className="the-value"></span>
        </span>
        <span className="the-prop"></span>
        <progress></progress>
      </div>
    </aside>
  );
}
