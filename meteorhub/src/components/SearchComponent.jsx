import { useState } from "react";
import Data from '../assets/data.json';

export default function SearchComponent() {
    const [query, setQuery] = useState("");
    console.log(Data);
    return (
        <>
            <input type="text" placeholder="Search" onChange={event => setQuery(event.target.value)} />
            {Data.map((meteorData, id) => (
                <div key={id}>
                    <p>{meteorData.name}</p>
                </div>
            ))}
        </>
    )
}

