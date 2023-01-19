import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const login = (email, password) => {
        console.log("login auth", { email, password });

        if (password === "123") {
            setUser({ id: "123", email });
            navigate("/home");
        }
    };
    const logout = () => {
        console.log("Você saiu!");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
