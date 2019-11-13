import React from 'react';
import Movie from './Movie';

const MoviesList = ({ movies }) => (
  <div>
      <h3>Your Movies</h3>
    <Movie key={movie.id} movie={movie} 
    />
  </div>
);

export default MoviesList;