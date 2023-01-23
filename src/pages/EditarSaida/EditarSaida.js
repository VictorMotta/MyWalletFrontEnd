import { useNavigate, useParams } from "react-router-dom";
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
import { REACT_APP_API_URL } from "../../constants/urls";

const EditarSaida = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();

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

        const promisse = axios.put(`${REACT_APP_API_URL}/registers/${id}`, body, config);
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
                <h1>Editar Saída</h1>
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
                    <StyledButtonSendNovaSaida>Atualizar saída</StyledButtonSendNovaSaida>
                </StyledContainerFormNovaSaida>
                <StyledButtonCancelNovaSaida onClick={() => navigate("/home")}>
                    Cancelar
                </StyledButtonCancelNovaSaida>
            </StyledSecondaryContainerNovaSaida>
        </StyledMainContainerNovaSaida>
    );
};

export default EditarSaida;
