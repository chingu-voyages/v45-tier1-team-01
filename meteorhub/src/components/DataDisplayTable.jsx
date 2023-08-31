import "./DataDisplayTable.css";

export default function DataDisplayTable(props) {
  return (
    <div className="data-row" key={props.id}>
      <span className="left">
        <span className="meteor-name">{props.name}</span>
        <span className="meteor-mass">{props.mass} MT</span>
      </span>
      <span className="right">
        <span className="meteor-recclass">{props.recclass}</span>
        <span className="meteor-year">{props.year}</span>
      </span>
    </div>
  );
}
