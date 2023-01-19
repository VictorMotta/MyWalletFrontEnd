import { Link } from "react-router-dom";
import {
    StyledContainerMain,
    StyledContainerSecondary,
    StyledFormLogin,
    StyledButtonSend,
} from "./styled.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const { authenticated, login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password);
        console.log("submit", { email, password });
    };

    return (
        <StyledContainerMain>
            <StyledContainerSecondary>
                <h1>MyWallet</h1>
                <StyledFormLogin onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type='password'
                        placeholder='Senha'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <StyledButtonSend>Entrar</StyledButtonSend>
                </StyledFormLogin>
                <Link to='/cadastro'>Primeira Vez? Cadastre-se!</Link>
            </StyledContainerSecondary>
        </StyledContainerMain>
    );
};

export default Login;
