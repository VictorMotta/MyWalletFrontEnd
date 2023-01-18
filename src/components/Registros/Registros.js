import Registro from "../Registro/Registro";
import {
    StyledContainerRegistros,
    StyledContainerListRegistro,
    StyledContainerSaldoRegistros,
} from "./styled";
import { listRegistros } from "../../mock/mock";
import { useState, useEffect } from "react";

const Registros = () => {
    const [list, setList] = useState(listRegistros);
    const [saldo, setSaldo] = useState(0);
    useEffect(() => {
        let total = 0;

        for (let i = 0; i < list.length; i++) {
            if (list[i].type === "entrada") {
                total += list[i].valor;
            }
            if (list[i].type === "saida") {
                total -= list[i].valor;
            }
        }

        setSaldo(total);
    }, [list]);

    console.log(list);
    return (
        <StyledContainerRegistros>
            {list ? (
                <StyledContainerListRegistro>
                    {list.map((item) => (
                        <Registro key={item.id} item={item} />
                    ))}
                </StyledContainerListRegistro>
            ) : (
                <h6>Não há Registros de entrada ou saída</h6>
            )}
            <StyledContainerSaldoRegistros colorValorSaldo={saldo > 0 ? "#03AC00" : "#C70000"}>
                <h1>SALDO</h1>
                <span>{saldo}</span>
            </StyledContainerSaldoRegistros>
        </StyledContainerRegistros>
    );
};

export default Registros;
