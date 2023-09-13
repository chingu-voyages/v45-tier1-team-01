import { useState, useRef } from "react";
import "./SearchComponent.css";

export default function FilterRangeComponent({
    updateRange,
    toggleFilterModal,
    toggleRangeTag
}) {
    const minRangeRef = useRef(null);
    const maxRangeRef = useRef(null);

    function clickHandler() {
        updateRange(minRangeRef.current.value, maxRangeRef.current.value);
        toggleFilterModal();
        toggleRangeTag();
    }

    return (
        <div className = "popup">
            <div className = "popup-inner">
                <button className = "close-btn" onClick={(e) => toggleFilterModal()}>X</button>
                    <div className = "range-wrapper">
                        <div>
                            <input
                                type="number"
                                placeholder="Min Mass"
                                ref={minRangeRef}
                            />
                            <input
                                type="number"
                                placeholder="Max Mass"
                                ref={maxRangeRef}
                            />
                        </div>
                        <button 
                            className="apply-btn" 
                            onClick={(e) => clickHandler()}
                        >Apply</button>
                    </div>          
            </div>
        </div>
    )
}
