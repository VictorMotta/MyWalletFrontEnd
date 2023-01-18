import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Cadastro from "./pages/Cadastro/Cadastro.js";
import Home from "./pages/Home/Home.js";
import NovaEntrada from "./pages/NovaEntrada/NovaEntrada.js";
import NovaSaida from "./pages/NovaSaida/NovaSaida.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home' element={<Home />} />
                <Route path='/nova-entrada' element={<NovaEntrada />} />
                <Route path='/nova-saida' element={<NovaSaida />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
