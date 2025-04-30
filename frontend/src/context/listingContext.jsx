import { createContext, useEffect, useState } from "react";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); 
  const [notFound, setNotFound] = useState(false); 
  const [listing, setListing] = useState(null);
  const navigate = useNavigate(); 

  const fetchListings = async () => {
    try {
      const res = await client.get("/getAllListings");
      console.log(res);
      setListings(res.data);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleListing = async (id) => {
    try {
      const res = await client.get(`/getAllListings/${id}`);
      setListing(res.data);
      setNotFound(false); // If success, no "not found" error
    } catch (error) {
      console.error("Error fetching listing:", error);
      if (error.response && error.response.status === 404) {
        setMessage(error.response.data.message || "Listing not found.");
      } else {
        setMessage("An error occurred while fetching the listing.");
      }
      setNotFound(true);
      setListing(null); // Clear previous listing
    }
  };

  const dltListing = async (id) => {
    try {
      const token = localStorage.getItem("token"); // or however you store it
      const res = await client.delete(`/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setListings(listings.filter((listing) => listing._id !== id));
      setMessage("Listing deleted successfully.");
      navigate("/Listings");
    } catch (error) {
      console.error("Error deleting listing:", error);
      setMessage("An error occurred while deleting the listing.");
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingsContext.Provider
      value={{
        listings,
        loading,
        message,
        notFound,
        listing,
        fetchListings,
        fetchSingleListing,
        dltListing,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};
