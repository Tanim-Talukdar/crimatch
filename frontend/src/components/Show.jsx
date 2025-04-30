import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ListingsContext } from "../context/listingContext";
import NumberBox from "./quantity";
import { AuthContext } from '../context/authcontext';
import Loading from '../Loading'; // Import the Loading component

export default function Show() {
  const { userData } = useContext(AuthContext); // Access user data for admin check
  const { id } = useParams();
  
  const { listing, notFound, message, fetchSingleListing, dltListing } = useContext(ListingsContext);

  useEffect(() => {
    fetchSingleListing(id); // Fetch the listing when the component mounts or the ID changes
  }, [id, fetchSingleListing]);

  if (notFound) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>404</h1>
        <h1>{message}</h1>
      </div>
    );
  }

  if (!listing) {
    return <Loading />; // Show loading spinner if the listing is not fetched yet
  }

  // Handle delete button click
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      dltListing(id); // Call the delete function with the listing ID
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 show-img">
          <img src={listing.image.path} alt="" />
        </div>
        <div className="col-6 text-muted">
          <h2>{listing.title}</h2>
          <div className="mt-3"><h4>&#2547;{listing.price} / kg</h4></div>
          <p>availability: <span className="text-success">In Stocks</span></p>
          <p className="text-muted h5 lh-lg mt-5">{listing.description}</p>
          <hr className="mt-5" />
          <pre className="fs-5">Type       : {listing.type}</pre>
          <pre className="fs-5">Quantity   : {listing.quantity}</pre>
          <pre className="fs-5">Condition  : {listing.condition}</pre>
          <pre className="fs-5">Location   : {listing.location}, {listing.country}</pre>
          <hr />
          <pre className="fs-5">Quantity(kg)  : </pre><NumberBox/>

          <button className="btn btn-success w-25 fs-5 mt-5">Buy</button>

          <button className="btn btn-outline-success w-50 fs-5 mt-5 mx-3">
            <ShoppingCartCheckoutIcon /> Add to Cart
          </button>
          {userData && userData.role === "admin" && (
            <div className="mt-3">
              <button className="btn btn-outline-danger me-3 w-25" onClick={handleDelete}>
                Delete Listing
              </button>
              <Link className="btn btn-outline-danger w-50" to={`/edit/${id}`}>Edit Listing</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
