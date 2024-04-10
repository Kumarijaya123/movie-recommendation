/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import MoviesCard from './MoviesCard'
import styles from "./MoviesList.module.css"
// eslint-disable-next-line no-unused-vars
function MovieList({movies}) {
 
  return (
    <div className={`container ${styles.moviesList}`}>
      {movies.map((movie) => {
        return <MoviesCard key={movie.imbdID} {...movie}/>
        
      })}
    </div>
  )
 
}

export default MovieList