import { useContext } from "react";
import { FilterRangeContext } from "../App";
import "./SearchComponent.css";

export default function FilterTag({}){
    const selectedMassRange = useContext(FilterRangeContext);
    return (
        <div id="selectedRangeTag">
            <p>{selectedMassRange.minMass} - {selectedMassRange.maxMass}</p>
            <button>x</button>
        </div> 
    )
}