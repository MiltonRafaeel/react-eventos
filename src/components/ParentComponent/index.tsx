import { useState } from "react";
import ChieldComponent from "../ChieldComponent";

export default function ParentComponent() {

    const [triple, setTriple] = useState(0);

    function handleNewValue(newValue: number) {
        setTriple(newValue * 3); 
    }

    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
            {triple}
            <ChieldComponent onNewValue={handleNewValue} />
        </div>
    );
}