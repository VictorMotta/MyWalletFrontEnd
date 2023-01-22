import { useNavigate } from "react-router-dom";
import {
    StyledMainContainerNovaSaida,
    StyledSecondaryContainerNovaSaida,
    StyledContainerFormNovaSaida,
    StyledButtonSendNovaSaida,
    StyledButtonCancelNovaSaida,
} from "./styled";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BaseUrl } from "../../constants/urls";

const NovaSaida = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            description,
            value,
            type: "saida",
        };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promisse = axios.post(`${BaseUrl}/registers`, body, config);
        promisse.then((res) => {
            console.log(res.data);
            navigate("/home");
        });
        promisse.catch((err) => {
            alert(err.response.data);
        });
    };

    return (
        <StyledMainContainerNovaSaida>
            <StyledSecondaryContainerNovaSaida>
                <h1>Nova saída</h1>
                <StyledContainerFormNovaSaida onSubmit={handleSubmit}>
                    <input
                        type='number'
                        placeholder='Valor'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <input
                        type='text'
                        placeholder='Descrição'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
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
