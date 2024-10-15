import React, { useState } from "react";

const Dictionary = () => {
  const [apiData, setApiData] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
    </div>
  );
};

export default Dictionary;


return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearchWord(e.target.value)} // Updates searchWord on input change
          value={searchWord} // Tied to searchWord state
        />
        <button onClick={getDictionaryData}>Search</button>
      </div>
    </div>
  );

  

  const getDictionaryData = async () => {
    if (!searchWord) {
      setError("Please enter a word to search.");
      return;
    }
  
    try {
      setLoading(true);
      setError(""); // Reset error before fetching
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
          <h4>Word: {apiData.word}</h4>
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
  

