import { HashRouter,Routes,Route } from 'react-router-dom';
import Groth from './Groth';
import Home from './Home';
import Motivate from './Motivate';
import ProsCons from './ProsCons';
import School from './School';

function Routers() {
    return (
        <>
        <HashRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/grouth' element={<Groth />}></Route>
            <Route path='/proscons' element={<ProsCons />}></Route>
            <Route path='/school' element={<School />}></Route>
            <Route path='/motivate' element={<Motivate />}></Route>
        </Routes>
        </HashRouter>
        </>
    )
}

export default Routers;