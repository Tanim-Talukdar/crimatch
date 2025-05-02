import { createContext, useEffect, useState, useContext } from "react";

import { client } from "../../client";
import { AuthContext } from '../context/authcontext'; 

export const cartcontext = createContext();

export const CartProvider = ({ children }) => {
    const { userData, token } = useContext(AuthContext); 
    const [cartList, setCartList] = useState([]); // Keep the cart list updated
    const [message, setMessage] = useState(""); 
    const [notFound, setNotFound] = useState(false); 
    const [loading, setLoading] = useState(true); 

    // Fetch cart items when the component mounts or token changes
    const getCartItems = async () => {
        setLoading(true); 
        try {
            const res = await client.get("/usercart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCartList(res.data);
            if (res.data.length === 0) {
                setNotFound(true); 
            } else {
                setNotFound(false); 
            }
        } catch (error) {
            console.error("Failed to fetch cart items", error);
            setMessage("Error fetching cart items.");
        } finally {
            setLoading(false); 
        }
    };

    // Add a product to the cart
    const addToCart = async (productId, quantity) => {
        try {
            const res = await client.post("/add", 
                { productId, quantity }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const addedItem = res.data;

            // If the item is already in the cart, update its quantity and totalPrice
            setCartList(prev => {
                const existing = prev.find(item => item.productId === productId);
                if (existing) {
                    return prev.map(item =>
                        item.productId === productId
                            ? { ...item, quantity: item.quantity + quantity, totalPrice: addedItem.totalPrice }
                            : item
                    );
                } else {
                    return [...prev, addedItem];
                }
            });

            return addedItem;
        } catch (error) {
            console.error("Add to cart failed:", error.response?.data || error.message);
        }
    };

    const DeleteCart = async (itemId) => {
      try {
        await client.delete(`/remove/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        // Update local cart state after deletion
        setCartList(prev => prev.filter(item => item._id !== itemId));

          return addedItem;
      } catch (error) {
          console.error("Add to cart failed:", error.response?.data || error.message);
      }
  };

    // Fetch cart items whenever the token changes
    useEffect(() => {
        if (token) {
            getCartItems(); 
        }
    }, [token]); 

    return (
        <cartcontext.Provider value={{ cartList, message, notFound, loading, addToCart, DeleteCart }}>
            {children}
        </cartcontext.Provider>
    );
};
