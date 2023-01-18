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

const Home = () => {
    const navigate = useNavigate();

    return (
        <StyledMainContainerHome>
            <StyledSecondaryContainerHome>
                <StyledMenuHome>
                    <h1>Olá, Fulano</h1>
                    <IoExitOutline />
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
