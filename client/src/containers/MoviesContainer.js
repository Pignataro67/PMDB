import React, { Component } from 'react';
import AddMovie from '../components/AddMovies';
import GoalList from '../components/Goals/GoalList';

class MoviesContainer extends Component {
  render(){
    return(
      <div>
        <Movies />
        <MovieList />
      </div>
    )
  }
}

export default MoviesContainer;