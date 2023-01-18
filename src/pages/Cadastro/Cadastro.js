import { Link } from "react-router-dom";
import {
    StyledMainContainerCadastro,
    StyledSecondaryContainerCadastro,
    StyledFormCadastro,
    StyledButtonSendCadastro,
} from "./styled";

const Cadastro = () => {
    return (
        <StyledMainContainerCadastro>
            <StyledSecondaryContainerCadastro>
                <h1>MyWallet</h1>
                <StyledFormCadastro>
                    <input type='text' placeholder='Nome' />
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Senha' />
                    <input type='password' placeholder='Confirme a senha' />
                    <StyledButtonSendCadastro>Cadastrar</StyledButtonSendCadastro>
                </StyledFormCadastro>
                <Link to='/'>Já tem uma conta? Entre agora!</Link>
            </StyledSecondaryContainerCadastro>
        </StyledMainContainerCadastro>
    );
};

export default Cadastro;
