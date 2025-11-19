import { useEffect, useState } from "react";

function EffectEx(){
    let [text, setText] = useState("");

    useEffect(()=>{
        console.log("서버에 요청해서 제품 목록을 가져오는 부분");
        fetch("http://localhost:3010/product")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    })

    return (
    <>
       <div><input value={text} onChange={(e)=>{
        setText(e.target.value);
       }}></input></div> 
       <div>text : {text}</div>
    </>)
}

export default EffectEx;