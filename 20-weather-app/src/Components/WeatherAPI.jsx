import { Oval } from "react-loader-spinner";
import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import './Weather.css'

const WeatherAPI = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false); // New state for loading
  const [error, setError] = useState(null); // New state for error handling

  const url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "36c9a81c5b3604b6ee464364bb05e6b9";

  /// Fetch API function
  const fetchWeatherData = async (city) => {
    setLoading(true); // Start loading
    setError(null); // Reset error state
    try {
      const res = await fetch(`${url}?q=${city}&appid=${api_key}&units=metric`);
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
        console.log(data);
        
      } else {
        setError(data.message); // Handle error message from API
      }

    } catch (error) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSearch = () => {
    if (input == "") {
       alert( "Please enter city name")
    } else {

        fetchWeatherData(input)
    }
  }



  useEffect(() => {
    fetchWeatherData("London"); // Default to London weather on first load
  }, []);

  return (
    <div className="app">
      <h1 className="app-name">Your city weather for Today!</h1>

      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && (
        <Fragment>
          <br />
          <Oval type="Oval" color="black" height={100} width={100} />
        </Fragment>
      )}

      {error && (
        <Fragment>
          <br />
          <span className="error-message">
            <FontAwesomeIcon icon={faFrown} /> {error}
          </span>
        </Fragment>
      )}

      {weather && !loading && !error && (
        <div>
          <div className="city-name">
            <h2>
              {weather.name}, <span>{weather.sys.country}</span>
            </h2>
            
            <strong>Temperature: {weather.main.temp}°C</strong>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherAPI;
