import { AuthContext } from "../../contexts/auth";
import Registro from "../Registro/Registro";
import {
    StyledContainerRegistros,
    StyledContainerListRegistro,
    StyledContainerSaldoRegistros,
} from "./styled";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { BaseUrl } from "../../constants/urls";

const Registros = () => {
    const { user } = useContext(AuthContext);
    const [saldo, setSaldo] = useState(0);
    const [alternation, setAlternation] = useState(true);
    const [registers, setRegisters] = useState([]);
    console.log(registers);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const promisse = axios.get(`${BaseUrl}/registers`, config);
        promisse.then((res) => {
            const listRegisters = [...res.data];
            const filterMonth = listRegisters.filter(
                (register) => dayjs(register.date).format("MM") === dayjs(Date.now()).format("MM")
            );

            const dataRegisters = filterMonth.map((register) => {
                return {
                    ...register,
                    date: (register.date = dayjs(register.date).format("DD/MM")),
                };
            });

            setRegisters(dataRegisters);
        });
        promisse.catch((err) => {
            console.log(err.response.data);
            alert(err.response.data);
        });
    }, [alternation]);

    return (
        <StyledContainerRegistros>
            {registers.length !== 0 ? (
                <StyledContainerListRegistro>
                    {registers.map((item) => (
                        <Registro
                            key={item._id}
                            item={item}
                            setSaldo={setSaldo}
                            alternation={alternation}
                            setAlternation={setAlternation}
                        />
                    ))}
                </StyledContainerListRegistro>
            ) : (
                <h6>Não há Registros de entrada ou saída</h6>
            )}
            <StyledContainerSaldoRegistros colorValorSaldo={saldo > 0 ? "#03AC00" : "#C70000"}>
                {registers.length !== 0 && (
                    <>
                        <h1>SALDO</h1>
                        <span>{saldo.toFixed(2)}</span>
                    </>
                )}
            </StyledContainerSaldoRegistros>
        </StyledContainerRegistros>
    );
};

export default Registros;
