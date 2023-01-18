import styled from "styled-components";

export const StyledMainContainerNovaEntrada = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #8c11be;
    display: flex;
    justify-content: center;
`;

export const StyledSecondaryContainerNovaEntrada = styled.div`
    width: 90%;
    h1 {
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
        margin-top: 25px;
    }
`;

export const StyledContainerFormNovaEntrada = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    font-family: "Raleway", sans-serif;
    input {
        width: 100%;
        height: 58px;
        background: #ffffff;
        border-radius: 5px;
        margin-bottom: 13px;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
        border: none;
    }
    input::placeholder {
        color: #000000;
    }
`;

export const StyledButtonSendNovaEntrada = styled.button`
    width: 100%;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    border: none;
    transition: 0.5s;
    margin-bottom: 13px;
    cursor: pointer;
    :hover {
        color: #a328d6;
        background: #ffffff;
    }
`;

export const StyledButtonCancelNovaEntrada = styled.button`
    width: 100%;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    border: none;
    transition: 0.5s;
    margin-bottom: 36px;
    cursor: pointer;
    :hover {
        color: #a328d6;
        background: #ffffff;
    }
`;
