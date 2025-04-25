import { createContext, useEffect, useState } from "react";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  // State for form submission response
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();


  // Function to submit contact info
  const submitContact = async (contactData, token) => {
    setLoading(true);
    setError(null);
    setResponseMessage("");

    try {
      const res = await client.post(
        "/contact",
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // Successful submission
      setResponseMessage(res.data.message || "Contact submitted successfully.");
    } catch (err) {
      // Handle specific HTTP status codes
      if (err.response) {
        const { status, data } = err.response;
        if (status === 401) {
            router("/auth");
        } else if (status === 403) {
          setError(data.message || "Forbidden");
        } else {
          setError(data.message || "An error occurred while submitting the contact.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        submitContact,
        responseMessage,
        error,
        loading
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
