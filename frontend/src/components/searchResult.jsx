import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Loading from "../Loading";
import "../styles/ListingPage.css";
import { client } from "../../client";

const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await client.get(`/api/v1/search?q=${query}`);
        const data = await res.json();
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
    <div className="listing-container">
      <div className="listing-header" data-aos="fade-right">
        <h2>Search Results</h2>
        <div className="underline"></div>
      </div>

      {results.length === 0 ? (
        <p className="no-results">No listings found for "{query}".</p>
      ) : (
        <div className="listing-grid">
          {results.map((listing, index) => (
            <Link
              to={`/listings/${listing._id}`}
              key={listing._id}
              className="listing-card"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={listing.image.path}
                alt={listing.title}
                className="listing-image"
              />
              <div className="listing-content">
                <h3>{listing.title}</h3>
                <p>
                  {listing.description.length > 100
                    ? listing.description.slice(0, 100) + "..."
                    : listing.description}
                </p>
                <div className="price">৳ {listing.price} / kg</div>
                <button className="detail-button">Show Details</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;