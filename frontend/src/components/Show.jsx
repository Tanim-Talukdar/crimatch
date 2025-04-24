import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import NumberBox from "./quantity";


export default function Show() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [message, setMessage] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/listings/getAllListings/${id}`)
      .then((res) => {
        if (res.status === 404) {
          // Assuming the error message is in the response body
          return res.json().then((data) => {
            setMessage(data.message || "Listing not found.");
            setNotFound(true);
            return null; // Early return to avoid further processing
          });
        }
        return res.json(); // Process as normal if not 404
      })
      .then((data) => {
        if (data && !notFound) {
          setListing(data); // Set listing only if not already in 404 state
        }
      })
      .catch((err) => {
        console.error("Error fetching listing:", err);
        setNotFound(true);
        setMessage("An error occurred while fetching the listing.");
      });
  }, [id]);

  if (notFound) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>404</h1>
        <h1>{message}</h1>
      </div>
    );
  }

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 show-img">
          <img src={listing.image.url} alt="" />
        </div>
        <div className="col-6 text-muted">
          <h2>{listing.title}</h2>
          <div className="mt-3"><h4 >&#2547;{listing.price} / kg
          </h4></div>
          <p>availability: <span className="text-success">In Stocks </span></p>
          <p className="text-muted h5 lh-lg mt-5">{listing.description}</p>
          <hr className="mt-5" />
          <pre className="fs-5">Type       : {listing.type}</pre>
          <pre className="fs-5">Quantity   : {listing.quantity}</pre>
          <pre className="fs-5">Condition  : {listing.condition}</pre>
          <pre className="fs-5">Location   : {listing.location} , {listing.country}</pre>
          <hr />

          <pre className="fs-5">Quantity(kg)  : </pre><NumberBox/>

          <button className="btn btn-success w-25 fs-5 mt-5">Buy</button>

          <button className="btn btn-outline-success w-50 fs-5 mt-5 mx-3" onClick={() => addToCart(listing)}>
            <ShoppingCartCheckoutIcon /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}