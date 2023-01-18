import { useNavigate } from "react-router-dom";
import {
    StyledMainContainerNovaSaida,
    StyledSecondaryContainerNovaSaida,
    StyledContainerFormNovaSaida,
    StyledButtonSendNovaSaida,
    StyledButtonCancelNovaSaida,
} from "./styled";

const NovaSaida = () => {
    const navigate = useNavigate();

    return (
        <StyledMainContainerNovaSaida>
            <StyledSecondaryContainerNovaSaida>
                <h1>Nova saída</h1>
                <StyledContainerFormNovaSaida>
                    <input type='number' placeholder='Valor' />
                    <input type='text' placeholder='Descrição' />
                    <StyledButtonSendNovaSaida>Salvar saída</StyledButtonSendNovaSaida>
                </StyledContainerFormNovaSaida>
                <StyledButtonCancelNovaSaida onClick={() => navigate("/home")}>
                    Cancelar
                </StyledButtonCancelNovaSaida>
            </StyledSecondaryContainerNovaSaida>
        </StyledMainContainerNovaSaida>
    );
};

export default NovaSaida;
