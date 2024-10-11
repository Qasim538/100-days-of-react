import React, { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFav from "./Components/AddFav";
import RemoveFav from "./Components/RemoveFav";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    if (!searchValue) return;

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5c806954`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]); // Clear movies if no search results
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      const timer = setTimeout(() => {
        getMovieRequest(searchValue);
      }, 500); // Debouncing the search by 500ms

      return () => clearTimeout(timer);
    }
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    } else {
      setFavourites([]);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavMovie = (movie) => {
    const newFavList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList
          handleFavouriteClick={addFavouriteMovie}
          movies={movies}
          FavouriteComponent={AddFav}
        />
      </div>

      <div className="row d-flex align-center mt-4 mb-4">
        <MovieListHeading heading="Favourites:" />
      </div>
      <div className="row">
        <MovieList
          handleFavouriteClick={removeFavMovie}
          movies={favourites}
          FavouriteComponent={RemoveFav}
        />
      </div>
    </div>
  );
};

export default App;
