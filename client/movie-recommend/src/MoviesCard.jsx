/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./MoviesCard.module.css"
import {Link} from "react-router-dom"
function MoviesCard({Title, Year, imdbID, Type, Poster}) {
  return (
    <Link className={styles.movieCard} to={`/detail/${imdbID}`}>
        <img src={Poster === "N/A" ? "https://tse2.mm.bing.net/th?id=OIP.hh1qIFrIG-pUMxuHs0zudQHaLH&pid=Api&P=0&h=180" : Poster} 
        alt='' className={styles.moviePoster}/>
        <h2 className={styles.movieTitle}>{Title}</h2>
        <h3 className={styles.movieYear}>{Year}</h3>
        <h4 className={styles.movieType}>{Type}</h4>
    </Link>
  )
}

export default MoviesCard