import { useContext } from "react";
import { PersonContext } from "./context/PersonContext";

function Contents1(){
    let user = useContext(PersonContext);
    console.log("user => ", user);
    return <>
        <div>{"Context로 보낸 name : " + user.name}</div>
    </>
}
function Contents2(props){
    return <>
        <div>{"props로 보낸 name : " + props.name}</div>
    </>
}
function Body(props){
    return <>
        <Contents1></Contents1>
        <Contents2 name={props.name}></Contents2>
    </>
}

function Project(props){
    return <>
        <Body name={props.name}></Body>
    </>
}

function ContextEx(){
    let name = "홍길동";
    let user = {
        name : "홍길동",
        age : 30,
        addr : "인천"
    }
    // content1한테 위에 3개 보내고 싶음
    return <>
        <PersonContext.Provider value={user}>
            <Project name={name}></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;