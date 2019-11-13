import React, { Component } from 'react';
import AddMovie from '../components/AddMovies';
import MoviesList from '../components/Movies/MoviesList';

class MoviesContainer extends Component {

  constructor(){
    super()
    this.state = {
    goals: []
  }
}

componentDidMount(){
  fetch('./api/goals')
    .then(response => response.json())
    .then(goals => this.setState({goals}))
}

  render(){
    return(
      <div className="Movies-container">

        {/* <MoviesList movies={this.state.movies}/> */}
      </div>
    )
  }
}

export default MoviesContainer;