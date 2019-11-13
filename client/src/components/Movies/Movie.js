import React, { Component } from 'react';

const Movie = ({ name, genre }) => (
    <div className="Goal">
      <h3>Name: {name}</h3>
      <h4>Genre: {genre}</h4>
    </div>
  )
  
  export default Movie;