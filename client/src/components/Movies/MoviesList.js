import React, { Component } from 'react';
import Goal from './Movie';


export default class MoviesList extends Component {
  render(){
    const { movies }  = this.props; 

    const listMovies = movies.map(m => {
      return (
        <li><Movie key={m.id} movie={g} /></li>
      )
    })

    return(
      <ol>
        {listMovies}
      </ol>
    )

  }
}