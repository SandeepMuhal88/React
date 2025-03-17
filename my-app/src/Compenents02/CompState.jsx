import { useState } from "react";
function CompState() {
    const [count,setcount]=useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>+</button>
            <button onClick={()=>setcount(count-1)}>-</button>

        </div>
    )
}
export default CompState;