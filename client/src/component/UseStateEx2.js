import { useState } from "react";

function StateEx(){
    let [toggle, setToggle] = useState(true);
    return (
        <>
            <div>
                <button onClick={()=>{
                    setToggle(!toggle);
                }}>blue/red</button>
            </div>
            <div style={{color : toggle ? "blue" : "red", fontWeight : "bold"}}>React 재밌다!</div>
            
        </>
    )
}

export default StateEx;