import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Loading from "../Loading";
import "../styles/ListingPage.css";
import { client } from "../../client";

const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await client.get(`/search?q=${query}`);

        const data = res.data;
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <div className="listing-header" data-aos="fade-right">
        <div className="mt-3 mb-4" data-aos="fade-right">
          <h3 className="clr">Search Result</h3>
        </div>
        <div className="underline"></div>
      </div>

      {results.length === 0 ? (
        <p className="no-results">No listings found for "{query}".</p>
      ) : (
    <div className="container">
      <div className="row">
        
        <hr />
        {results.map((listing, index) => (
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
      )}
    </div>
  );
};

export default SearchResult;