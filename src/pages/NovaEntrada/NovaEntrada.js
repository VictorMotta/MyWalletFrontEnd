import { useNavigate } from "react-router-dom";
import {
    StyledMainContainerNovaEntrada,
    StyledSecondaryContainerNovaEntrada,
    StyledContainerFormNovaEntrada,
    StyledButtonSendNovaEntrada,
    StyledButtonCancelNovaEntrada,
} from "./styled";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { REACT_APP_API_URL } from "../../constants/urls";

const NovaEntrada = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            description,
            value,
            type: "entrada",
        };
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promisse = axios.post(`${REACT_APP_API_URL}/registers`, body, config);
        promisse.then((res) => {
            console.log(res.data);
            navigate("/home");
        });
        promisse.catch((err) => {
            alert(err.response.data);
        });
    };

    return (
        <StyledMainContainerNovaEntrada>
            <StyledSecondaryContainerNovaEntrada>
                <h1>Nova entrada</h1>
                <StyledContainerFormNovaEntrada onSubmit={handleSubmit}>
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
