import { Link } from "react-router-dom";

function Home(){
    return <>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/context1">useContext실습1</Link></li>
            <li><Link to="/context2">useContext실습2</Link></li>
            <li><Link to="/effect">useEffect실습</Link></li>
            
            <li><a href="/context2">useContext실습2(a태그)</a></li>
        </ul>
    </>
}

export default Home;