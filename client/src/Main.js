import StateEx1 from './component/UseStateEx1';
import StateEx2 from './component/UseStateEx2';
import EffectEx1 from './component/UseEffectEx1';
import EffectEx2 from './component/UseEffectEx2';
import Ref1 from './component/UseRef';
import ProductAdd from './component/ProductAdd';
import ContextEx from './component/UseContext1';
import ContextEx2 from './component/UseContext2';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function Main(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/context1" element={<ContextEx />}></Route>
                <Route path="/context2" element={<ContextEx2 />}></Route>
                <Route path="/effect" element={<EffectEx2 />}></Route>
            </Routes>
            
        </>
    )
}

export default Main;