import { Link } from "react-router-dom";
import {
    StyledContainerMain,
    StyledContainerSecondary,
    StyledFormLogin,
    StyledButtonSend,
} from "./styled.jsx";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.js";
import axios from "axios";
import { REACT_APP_API_URL } from "../../constants/urls.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { email, password };

        const promisse = axios.post(`${REACT_APP_API_URL}/sign-in`, body);
        promisse.then((res) => {
            login(res.data);
            console.log(res.data);
        });
        promisse.catch((err) => {
            console.log(err.response.data);
            if (err.response.data.message) {
                return err.response.data.forEach((data) => {
                    alert(data.message);
                });
            }
            alert(err.response.data);
        });
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
