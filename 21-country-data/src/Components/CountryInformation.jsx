import React, { useState } from "react";
import CountryInfo from "./CountryInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryInformation = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch API data
  const getDataFromApi = async (name) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        throw new Error("Country not found");
      }
      const data = await res.json();
      setCountryData(data);
    } catch (error) {
      setError(error.message);
      setCountryData(null);
    } finally {
      setLoading(false);
      setCountryName(""); // Clear input after search
    }
  };

  const handleSearch = () => {
    if (countryName.trim() === "") {
      setError("Please enter a valid country name.");
      return;
    }
    getDataFromApi(countryName);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="countryName"
              placeholder="Enter country name."
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                id="search-btn"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Display informative content when no search is made */}
      {!loading && !countryData && !error && (
        <div className="text-center text-muted">
          <p>Start by entering a country name to see its information!</p>
        </div>
      )}

      {/* Display country info when available */}
      {!loading && countryData && <CountryInfo countryData={countryData} />}
    </div>
  );
};

export default CountryInformation;
