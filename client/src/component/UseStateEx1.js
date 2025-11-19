import { useState } from "react";

function StateEx(){
    let varNum = 1;
    let [stateNum, setStateNum] = useState(1);
    return (
        <>  
            <div>varNum : {varNum}</div>
            <div>stateNum : {stateNum}</div>
            <hr></hr>
            <div>
                <button onClick={()=>{
                    varNum += 1;
                    console.log(varNum);
                }}>varNum 증가</button>
                <button>stateNum 증가</button>
            </div>
        </>
    )
}

export default StateEx;