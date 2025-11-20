import { useContext, useState } from "react";
import { PersonContext } from "./context/PersonContext";

function Contents1(){
    let login = useContext(PersonContext);
    return <>
        <div style={{
                border : "1px solid black", 
                height : "100px", 
                width : "250px",
                margin : "10px"
        }}> 
            contents1
            <div style={{margin : "10px", color : login.loginFlg ? "blue" : "red"}}>
                {/* 헤더의 '로그인/로그아웃' 버튼 클릭 시 */}
                {/* 이곳의 내용으로 '로그인되었습니다!' / '로그아웃 되었습니다' */}
                {/* 2개의 문구가 왔다갔다 하도록(토글) */}
                {login.loginFlg ? "로그인 되었습니다!" : "로그아웃 되었습니다"}
            </div>
        </div>
    </>
}
function Contents2(){
    return <>
        <div style={{
                border : "1px solid black", 
                height : "100px", 
                width : "250px",
                margin : "10px"
        }}> 
            contents2
        </div>
    </>
}
function Body(){
    return <>
        <div style={{
                border : "1px solid black", 
                height : "300px", 
                width : "400px",
                margin : "10px"
        }}> 
            Body
            <Contents1></Contents1>
            <Contents2></Contents2>
        </div>
    </>
}
function Header(){
    let login = useContext(PersonContext);
    return <>
        <div style={{
                border : "1px solid black", 
                height : "80px", 
                width : "400px",
                margin : "10px"
            }}> 
            Header
            <div><button onClick={()=>{
                login.setLoginFlg(!login.loginFlg);
            }}>로그인/로그아웃</button></div>
        </div>
    </>
}
function Project(){
    return <>
        <div style={{border : "1px solid black", height : "600px"}}>  
            Project
            <Header></Header>
            <Body></Body>
        </div>
        
    </>
}


function ContextEx(){
    let [loginFlg, setLoginFlg] = useState(true);
    return <>
        <PersonContext.Provider value={{loginFlg, setLoginFlg}}>
            <Project></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;