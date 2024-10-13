import React, { useEffect, useState } from "react";
import "./Styles.css";
import Buttons from "./Buttons";

const JokesApi = () => {
  const [jokes, setJokes] = useState([]);

  const url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";

  const getJokeApi = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
    //   console.log(data.joke);
      setJokes(data.joke);
      
    } catch (error) {
        console.error(error)
    }
  };

  useEffect(() => {
    getJokeApi();
  }, []);

  return (
    <div>
    <Buttons getJokeApi={getJokeApi} />
      <h3 className="joke">{jokes}</h3>
    </div>
  );
};

export default JokesApi;
