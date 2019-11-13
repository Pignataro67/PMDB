import React, { Component } from 'react';
import Movie from './Movie';

export default class MovieList extends Component {
  render(){
    debugger
    return(
      <div>
        MovieList
      </div>
    )
  }
}

MovieList.defaultProps = {
  Movies: [
      {
      id: 1,
      name: "Become a Software Engineer",
      objectives: [
      {
      id: 1,
      name: "Build the best Project Ever",
      },
      {
      id: 2,
      name: "Build Portfolio",
      }
      ]
      }
  ]
}