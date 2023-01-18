import styled from "styled-components";

export const StyledContainerRegistro = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
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
`;
