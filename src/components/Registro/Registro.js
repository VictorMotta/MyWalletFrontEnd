import { useEffect } from "react";
import { StyledContainerRegistro } from "./styled";

const Registro = ({ item, saldo, setSaldo }) => {
    const { description, value, date, type } = item;

    const valueNumber = Number(value).toFixed(2);

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
                <p>{valueNumber}</p>
            </StyledContainerRegistro>
        </>
    );
};

export default Registro;
