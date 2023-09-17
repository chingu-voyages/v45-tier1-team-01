import "./SearchComponent.css";

export default function FilterTag({
    minMass,
    maxMass,
    toggleRangeTag,
    resetFilter}){
    
    function clickHandler() {
        resetFilter();
        toggleRangeTag();
    }
    return (
        <div id="selectedRangeTag">
            <p>{minMass} - {maxMass}</p>
            <button onClick={() => clickHandler()}>x</button>
        </div> 
    )
}