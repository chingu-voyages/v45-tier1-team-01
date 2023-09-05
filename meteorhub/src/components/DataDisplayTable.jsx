import "./DataDisplayTable.css";

export default function DataDisplayTable({ id, name, mass, recclass, year }) {
  return (
    <div className="data-row" key={id}>
      <span className="left">
        <span className="meteor-name">{name}</span>
        <span className="meteor-mass">{mass} MT</span>
      </span>
      <span className="right">
        <span className="meteor-recclass">{recclass}</span>
        <span className="meteor-year">{year}</span>
      </span>
    </div>
  );
}
