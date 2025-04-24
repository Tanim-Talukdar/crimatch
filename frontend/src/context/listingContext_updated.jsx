import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ListingsContext = createContext();

const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + "/listings"
});

export const ListingsProvider = ({ children }) => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await client.get("/getAllListings");
                setListings(response.data);
            } catch (error) {
                console.error("Failed to fetch listings:", error);
            }
        };
        fetchListings();
    }, []);

    return (
        <ListingsContext.Provider value={{ listings }}>
            {children}
        </ListingsContext.Provider>
    );
};
