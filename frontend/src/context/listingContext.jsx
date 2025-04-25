import { createContext, useEffect, useState } from "react";
import { client } from "../../client";

export const ListingsContext = createContext();


export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");  // For error messages
  const [notFound, setNotFound] = useState(false);  // For handling 404 errors
  const [listing, setListing] = useState(null);

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

  const fetchSingleListing = async (id) => {
    try {
      const res = await fetch(`https://crimatch.onrender.com/api/v1/getAllListings/${id}`);
      if (res.status === 404) {
        const data = await res.json();
        setMessage(data.message || "Listing not found.");
        setNotFound(true);
        return null; // Early return if not found
      }
      const data = await res.json();
      setNotFound(false); // Reset "not found" error state
      setListing(data);
    } catch (error) {
      console.error("Error fetching listing:", error);
      setNotFound(true);
      setMessage("An error occurred while fetching the listing.");
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingsContext.Provider value={{ listings, loading, message, notFound, listing, fetchSingleListing}}>
      {children}
    </ListingsContext.Provider>
  );
};