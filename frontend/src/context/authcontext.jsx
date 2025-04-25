import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { client } from "../../client";
export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const router = useNavigate();

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            const decoded = jwtDecode(savedToken,{ header: true }); // 🛠 Fix: use savedToken not token
            setUserData(decoded);
        }
    }, []);

    const handleRegister = async (name, email, password) => {
        try {
            const res = await client.post("/register", { name, email, password });
            if (res.status === httpStatus.CREATED) {
                return res.data.message;
            }
        } catch (err) {
            throw err;
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const res = await client.post("/login", { email, password });
            if (res.status === httpStatus.OK) {
                const token = res.data.token;
                localStorage.setItem("token", token);
                setToken(token);

                const decoded = jwtDecode(token,{ header: true }); // 🛠 Fix: use jwtDecode.default()
                setUserData(decoded);
 
                console.log("User Info:", decoded);
                router("/listings");
            }
        } catch (err) {
            throw err;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUserData(null);
        router("/");
    };

    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin,
        handleLogout,
        token
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};