import { useNavigate } from "react-router-dom";
import {
    StyledMainContainerNovaEntrada,
    StyledSecondaryContainerNovaEntrada,
    StyledContainerFormNovaEntrada,
    StyledButtonSendNovaEntrada,
    StyledButtonCancelNovaEntrada,
} from "./styled";

const NovaEntrada = () => {
    const navigate = useNavigate();

    return (
        <StyledMainContainerNovaEntrada>
            <StyledSecondaryContainerNovaEntrada>
                <h1>Nova entrada</h1>
                <StyledContainerFormNovaEntrada>
                    <input type='number' placeholder='Valor' />
                    <input type='text' placeholder='Descrição' />
                    <StyledButtonSendNovaEntrada>Salvar entrada</StyledButtonSendNovaEntrada>
                </StyledContainerFormNovaEntrada>
                <StyledButtonCancelNovaEntrada onClick={() => navigate("/home")}>
                    Cancelar
                </StyledButtonCancelNovaEntrada>
            </StyledSecondaryContainerNovaEntrada>
        </StyledMainContainerNovaEntrada>
    );
};

export default NovaEntrada;
