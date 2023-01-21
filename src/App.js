import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Cadastro from "./pages/Cadastro/Cadastro.js";
import Home from "./pages/Home/Home.js";
import NovaEntrada from "./pages/NovaEntrada/NovaEntrada.js";
import NovaSaida from "./pages/NovaSaida/NovaSaida.js";
import { AuthContext, AuthProvider } from "./contexts/auth.js";
import { useContext } from "react";

function App() {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to='/' />;
        }

        return children;
    };

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route
                        path='/home'
                        element={
                            <Private>
                                <Home />
                            </Private>
                        }
                    />
                    <Route
                        path='/nova-entrada'
                        element={
                            <Private>
                                <NovaEntrada />
                            </Private>
                        }
                    />
                    <Route
                        path='/nova-saida'
                        element={
                            <Private>
                                <NovaSaida />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
