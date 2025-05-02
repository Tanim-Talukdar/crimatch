import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ListingsContext } from "../context/listingContext";
import NumberBox from "./quantity";
import { AuthContext } from '../context/authcontext';
import Loading from '../Loading'; 
import { cartcontext } from '../context/cartcontext'; 

export default function Show() {
  const { userData } = useContext(AuthContext); // Access user data for admin check
  const { id } = useParams(); // Get product ID from URL parameters
  const { listing, notFound, message, fetchSingleListing, dltListing } = useContext(ListingsContext);
  const { addToCart } = useContext(cartcontext); // Assuming you have an addToCart method in your cart context

  const [quantity, setQuantity] = useState(1); // Track quantity of the product

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
    return <Loading />; 
  }


  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      dltListing(id); 
    }
  };


  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(listing._id, quantity); 
    } else {
      alert("Please select a quantity greater than 0");
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
          <pre className="fs-5">Quantity(kg)  : </pre>
          
          {/* Update Quantity component */}
          <NumberBox quantity={quantity} setQuantity={setQuantity} />

          <button className="btn btn-success w-25 fs-5 mt-5">Buy</button>

          {/* Add to Cart Button */}
          <button className="btn btn-outline-success w-50 fs-5 mt-5 mx-3" onClick={handleAddToCart}>
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
