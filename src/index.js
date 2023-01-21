import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyled from "./styles/GlobalStyle.js";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
    <>
        <GlobalStyled />
        <App />
    </>
);
