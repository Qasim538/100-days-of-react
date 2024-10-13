import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryInfo = ({ countryData }) => {
  const country = countryData[0]; // Extract the first country object from the array

  return (
    <div className="card p-4">
      <div className="row align-items-center">
        {/* Left Column: Flag */}
        <div className="col-lg-4 col-md-12 text-center mb-3 mb-lg-0">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="img-fluid w-100"
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Right Column: Country Info */}
        <div className="col-lg-8 col-md-12">
          <h2 className="mb-4">{country.name.common}</h2>

          <div className="row mb-2">
            <h5 className="col-sm-6">
              Capital: <span className="text-muted">{country.capital ? country.capital[0] : "N/A"}</span>
            </h5>
            <h5 className="col-sm-6">
              Continent: <span className="text-muted">{country.continents ? country.continents[0] : "N/A"}</span>
            </h5>
          </div>

          <div className="row mb-2">
            <h5 className="col-sm-6">
              Region: <span className="text-muted">{country.region || "N/A"}</span>
            </h5>
            <h5 className="col-sm-6">
              Subregion: <span className="text-muted">{country.subregion || "N/A"}</span>
            </h5>
          </div>

          <div className="row mb-2">
            <h5 className="col-sm-6">
              Population: <span className="text-muted">{country.population.toLocaleString()}</span>
            </h5>
            <h5 className="col-sm-6">
              Calling Codes: <span className="text-muted">{country.idd.root}{country.idd.suffixes ? country.idd.suffixes.join(", ") : ""}</span>
            </h5>
          </div>

          <div className="row mb-2">
            <h5 className="col-sm-6">
              Currency:{" "}
              <span className="text-muted">
                {country.currencies
                  ? Object.values(country.currencies)[0].name +
                    " (" +
                    Object.values(country.currencies)[0].symbol +
                    ")"
                  : "N/A"}
              </span>
            </h5>
            <h5 className="col-sm-6">
              Languages:{" "}
              <span className="text-muted">
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
