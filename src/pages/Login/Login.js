import { Link } from "react-router-dom";
import {
    StyledContainerMain,
    StyledContainerSecondary,
    StyledFormLogin,
    StyledButtonSend,
} from "./styled.jsx";

const Login = () => {
    return (
        <StyledContainerMain>
            <StyledContainerSecondary>
                <h1>MyWallet</h1>
                <StyledFormLogin>
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Senha' />
                    <StyledButtonSend>Entrar</StyledButtonSend>
                </StyledFormLogin>
                <Link to='/cadastro'>Primeira Vez? Cadastre-se!</Link>
            </StyledContainerSecondary>
        </StyledContainerMain>
    );
};

export default Login;
