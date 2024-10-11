import React, { useState } from 'react';


const MovieList = (props) => {

  const FavouriteComponent = props.FavouriteComponent;
  // Default to an empty array if props.movies is undefined or null
  const movies = props.movies || [];

  return (
    <div className='d-flex flex-row flex-wrap'>
    <div className="row">
        
    </div>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div className=' image-container flex justify-content-start m-3' key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <div onClick={()=> props.handleFavouriteClick(movie)} className="overlay d-flex align-item-center justify-content-center">
             <FavouriteComponent />
            </div>
          </div>
        ))
      ) : (

        <div className='preview'>
        <h1>Search Movie to see results</h1> 

        <img className='preview-img' src="https://i.ytimg.com/vi/RzkqZ057y6U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBU1UiQpbjF5EUiJX2myYB6pF3b0g" alt="" />
        </div>
      )}
    </div>
  );
};

export default MovieList;
