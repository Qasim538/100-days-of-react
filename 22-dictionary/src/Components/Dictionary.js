import React, { useState } from "react";
import { FaVolumeUp } from 'react-icons/fa';  // Importing FaVolumeUp from react-icons

const Dictionary = () => {
  const [apiData, setApiData] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // get data from API
  const getDictionaryData = async () => {
    if (!searchWord) {
      setError("Please enter a word to search.");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Reset the error before fetching new data
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await res.json();

      if (res.ok) {
        setApiData(data[0]);
      } else {
        setError("Word not found");
        setApiData(null);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Play pronunciation sound
  const playSound = () => {
    if (apiData && apiData.phonetics && apiData.phonetics[0] && apiData.phonetics[0].audio) {
      const audio = new Audio(apiData.phonetics[0].audio);
      audio.play();
    } else {
      alert("Audio not available for this word.");
    }
  };

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearchWord(e.target.value)}
          value={searchWord}
        />
        <button onClick={getDictionaryData}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Search Results</h3>
      {apiData && (
        <div className="showResults">
          <h4>
            Word: {apiData.word}
            {apiData.phonetics && apiData.phonetics[0] && apiData.phonetics[0].audio && (
              <FaVolumeUp
                className="soundIcon"
                onClick={playSound}
              />
            )}
          </h4>
          {apiData.meanings && apiData.meanings.map((meaning, index) => (
            <div key={index}>
              <h5>Part of Speech: {meaning.partOfSpeech}</h5>
              <ul>
                {meaning.definitions.map((def, defIndex) => (
                  <li key={defIndex}>{def.definition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dictionary;
