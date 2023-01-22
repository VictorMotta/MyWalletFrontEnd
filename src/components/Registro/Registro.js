import { useContext, useEffect } from "react";
import { StyledContainerRegistro } from "./styled";
import { BaseUrl } from "../../constants/urls";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

const Registro = ({ item, setSaldo, alternation, setAlternation }) => {
    const { user } = useContext(AuthContext);
    const { _id, description, value, date, type } = item;

    const valueNumber = Number(value).toFixed(2);

    const deleteRegister = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const checkDelete = window.confirm("Deseja deletar esse registro?");

        if (!checkDelete) {
            return null;
        }

        const promisse = axios.delete(`${BaseUrl}/registers/${_id}`, config);
        promisse
            .then((res) => {
                console.log(res.data);
                setAlternation(!alternation);
                if (type === "entrada") {
                    setSaldo((novoSaldo) => novoSaldo - Number(value));
                }
                if (type === "saida") {
                    setSaldo((novoSaldo) => novoSaldo + Number(value));
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    useEffect(() => {
        if (type === "entrada") {
            setSaldo((novoSaldo) => novoSaldo + Number(value));
        }
        if (type === "saida") {
            setSaldo((novoSaldo) => novoSaldo - Number(value));
        }
    }, []);

    return (
        <>
            <StyledContainerRegistro
                colorValorRegistro={
                    type === "entrada" ? "#03AC00" : type === "saida" ? "#C70000" : "#000"
                }
            >
                <span>{date}</span>
                <h1>{description}</h1>
                <div>
                    <p>{valueNumber}</p>
                    <h6 onClick={deleteRegister}>x</h6>
                </div>
            </StyledContainerRegistro>
        </>
    );
};

export default Registro;
