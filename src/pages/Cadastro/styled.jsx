import styled from "styled-components";

export const StyledMainContainerCadastro = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #8c11be;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledSecondaryContainerCadastro = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: "Saira Stencil One", cursive;
        font-size: 32px;
        color: #ffffff;
    }
    a {
        font-family: "Raleway", sans-serif;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
`;

export const StyledFormCadastro = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
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

export const StyledButtonSendCadastro = styled.button`
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
