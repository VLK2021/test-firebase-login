import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import Registration from "./pages/Registration/Registration";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Registration/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
