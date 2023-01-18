import styled from "styled-components";

export const StyledContainerRegistros = styled.div`
    margin-top: 22px;
    width: 100%;
    height: 70%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;

    h6 {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        width: 80%;
    }
`;

export const StyledContainerListRegistro = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-inline: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const StyledContainerSaldoRegistros = styled.div`
    width: 90%;
    height: 40px;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Raleway", sans-serif;
    background-color: #fff;
    h1 {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    span {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${(props) => props.colorValorSaldo};
    }
`;
