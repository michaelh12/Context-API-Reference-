import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
      {/* <h1>{state[0].name}</h1> */}
    </>
  );
};

export default MovieList;
