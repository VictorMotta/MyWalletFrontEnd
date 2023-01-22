import styled from "styled-components";

export const StyledContainerRegistro = styled.div`
    width: 94%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Raleway", sans-serif;
    margin-bottom: 20px;
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #c6c6c6;
    }
    h1 {
        width: 100%;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        text-align: start;
        margin-left: 10px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: ${(props) => props.colorValorRegistro};
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    div h6 {
        font-family: "Raleway", sans-serif;
        margin-left: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #c6c6c6;
        cursor: pointer;
    }
`;
