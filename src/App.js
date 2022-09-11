import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import LoginForm from "./pages/LoginForm/LoginForm";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<LoginForm/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
