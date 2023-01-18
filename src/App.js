import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Cadastro from "./pages/Cadastro/Cadastro.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
