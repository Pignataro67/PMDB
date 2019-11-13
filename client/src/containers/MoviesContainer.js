import React, { Component } from 'react';
import AddMovie from '../components/AddMovies';
import MoviesList from '../components/Movies/MoviesList';
import { connect } from 'react-redux';
import { fetchMovies } from  '../actions/moviesActions';

class MoviesContainer extends Component {

  componentDidMount(){
    this.props.fetchMovies()
  }

  render(){
    return(
      <div className="Movies-container">

        {/* <MoviesList movies={this.state.movies}/> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
  	goals: state.goals
  }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer);