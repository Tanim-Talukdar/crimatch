import { createContext, useEffect, useState } from "react";


export const ListingsContext = createContext();
const client = axios.create({
    baseURL: `http://localhost:5000/api/v1/listings`
})

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    try {
      const res = await client.get("/getAllListings");
      setListings(res.data);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingsContext.Provider value={{ listings, loading }}>
      {children}
    </ListingsContext.Provider>
  );
};