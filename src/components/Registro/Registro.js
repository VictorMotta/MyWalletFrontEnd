import { StyledContainerRegistro } from "./styled";

const Registro = ({ item }) => {
    const { descricao, valor, date, type } = item;
    console.log(item);

    return (
        <>
            <StyledContainerRegistro
                colorValorRegistro={
                    type === "entrada" ? "#03AC00" : type === "saida" ? "#C70000" : "#000"
                }
            >
                <span>{date}</span>
                <h1>{descricao}</h1>
                <p>{valor.toFixed(2)}</p>
            </StyledContainerRegistro>
        </>
    );
};

export default Registro;
