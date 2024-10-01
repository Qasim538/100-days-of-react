import React, { useState } from "react";
import FetchApi from "./FetchApi";

const Search = () => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use term to fetch new data
    // You can pass this `term` to the FetchApi via props or context
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for images..."
          aria-label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {/* You can render FetchApi component with the new term here */}
      <FetchApi term={term} />
    </div>
  );
};

export default Search;
