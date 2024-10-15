import { React, useState } from "react";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";

function Dictionary() {
  const [data, setData] = useState(null); // Store word data
  const [searchWord, setSearchWord] = useState(""); // Store search word
  const [error, setError] = useState(""); // Store error message

  // Function to fetch information on button click
  const getMeaning = () => {
    if (!searchWord) {
      setError("Please enter a word to search or check spellings.");
      return;
    }

    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        setData(response.data[0]);
        setError(""); // Clear error if request is successful
        console.log(response.data[0]);
      })
      .catch((error) => {
        setData(null); // Reset data on error
        setError("Word not found. Please try again.");
        console.error(error);
      });
  };

  // Function to play and listen to the phonetics of the searched word
  const playAudio = () => {
    if (data && data.phonetics && data.phonetics[0]?.audio) {
      let audio = new Audio(data.phonetics[0].audio);
      audio.play();
    } else {
      alert("No audio available for this word.");
    }
  };

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button onClick={getMeaning}>
          <FaSearch size="20px" />
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            {data.phonetics && data.phonetics[0]?.audio && (
              <button onClick={playAudio}>
                <FcSpeaker size="26px" />
              </button>
            )}
          </h2>
          <h4>Parts of speech:</h4>
          <p>{data.meanings[0].partOfSpeech}</p>

          <h4>Definition:</h4>
          <p>{data.meanings[0].definitions[0].definition}</p>

          {data.meanings[0].definitions[0].example && (
            <>
              <h4>Example:</h4>
              <p>{data.meanings[0].definitions[0].example}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Dictionary;
