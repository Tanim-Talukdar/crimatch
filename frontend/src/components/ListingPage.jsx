import React, { useEffect, useState } from "react";
import "../styles/ListingPage.css";
import { Link } from "react-router-dom";
import { ListingsContext } from "../context/listingContext";

const Listing = () => {
  const { listings } = React.useContext(ListingsContext);

  return (
    <div className="container">
      <div className="row">
        <div className="mt-3 mb-4" data-aos="fade-right">
          <h3 className="clr">All Listings</h3>
        </div>
        <hr />
        {listings.map((listing, index) => (
          <Link
            to={`/listings/${listing._id}`}
            key={listing._id}
            className="card col m-3 text-decoration-none text-dark"
            style={{ minWidth: "19rem", maxWidth: "25rem", cursor: "pointer" }}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // staggered animation
          >
            <img
              src={listing.image.path}
              alt={listing.title}
              className="card-img-top"
              style={{ minHeight: "15rem", maxHeight: "5rem" }}
            />
            <div className="card-body row">
              <h4 className="card-title">{listing.title}</h4>
              <p className="card-text">{listing.description}</p>
              <h5 className="card-text">
                Price : <b>&#2547;</b> {listing.price} / kg
              </h5>

              <button className="btn btn-outline-success">Show Detail</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
