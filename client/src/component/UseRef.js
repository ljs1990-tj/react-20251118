import { useState } from "react";

function Ref(){
    let varNum = 1;
    let [stateNum, setNum] = useState(1);
    return <>
        <div> varNum : {varNum} </div>
        <div> stateNum : {stateNum} </div>
        <hr></hr>
        <div>
            <button onClick={()=> varNum++ }>varNum 증가</button>
            <button onClick={()=> setNum(stateNum+1)}> stateNum 증가</button>
        </div>
    </>
}

export default Ref;