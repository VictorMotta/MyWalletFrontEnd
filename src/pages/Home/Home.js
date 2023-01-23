import Registros from "../../components/Registros/Registros";
import {
    StyledMainContainerHome,
    StyledSecondaryContainerHome,
    StyledMenuHome,
    StyledContainerButtonsRegistros,
} from "./styled";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { REACT_APP_API_URL } from "../../constants/urls";
import axios from "axios";

const Home = () => {
    const { logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const promisse = axios.delete(`${REACT_APP_API_URL}/logout`, config);
        promisse.then((res) => {
            logout();
        });
        promisse.catch((err) => {
            alert(err.response.data);
        });
    };

    return (
        <StyledMainContainerHome>
            <StyledSecondaryContainerHome>
                <StyledMenuHome>
                    <h1>Olá, {user.name}</h1>
                    <IoExitOutline onClick={handleLogout} />
                </StyledMenuHome>
                <Registros />
                <StyledContainerButtonsRegistros>
                    <button onClick={() => navigate("/nova-entrada")}>
                        <AiOutlinePlusCircle />
                        <h2>Nova entrada</h2>
                    </button>
                    <button onClick={() => navigate("/nova-saida")}>
                        <AiOutlineMinusCircle />
                        <h2>Nova saída</h2>
                    </button>
                </StyledContainerButtonsRegistros>
            </StyledSecondaryContainerHome>
        </StyledMainContainerHome>
    );
};

export default Home;
