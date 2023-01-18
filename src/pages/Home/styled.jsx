import styled from "styled-components";

export const StyledMainContainerHome = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    background-color: #8c11be;
    display: flex;
    justify-content: center;
`;

export const StyledSecondaryContainerHome = styled.div`
    width: 90%;
`;

export const StyledMenuHome = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
    }
    svg {
        font-size: 30px;
        cursor: pointer;
        color: #fff;
    }
`;

export const StyledContainerButtonsRegistros = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    button {
        width: 48%;
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #a328d6;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        cursor: pointer;
    }
    button h2 {
        width: 50%;
        text-align: start;
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #ffffff;
    }
    button svg {
        font-size: 23px;
        color: #fff;
    }
`;
