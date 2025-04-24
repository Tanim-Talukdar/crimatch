import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `https://crimatch.onrender.com/api/v1/users`
})


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const router = useNavigate();

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            // Optionally fetch user info here
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
                localStorage.setItem("token", res.data.token);
                setToken(res.data.token);
                setUserData(res.data.user); // optional
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
        userData, setUserData, handleRegister, handleLogin, handleLogout, token 
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}