/* eslint-disable no-unused-vars */
import {useState} from 'react'
import styles from "./MovieSearchForm.module.css"
import axios from 'axios'

//https://omdbapi.com/?s=${movieName}&apikey=${import.meta.env.VITE_API_KEY}
// eslint-disable-next-line react/prop-types
function MovieSearchForm({addNewMovies, setIsLoading, setIsError, setErrorMessage}) {
  const [movieName, setMovieName] = useState("")
  
  async function fetchMovies() {
    const URL = `https://omdbapi.com/?s=${movieName}&apikey=${import.meta.env.VITE_API_KEY}`;
    setIsLoading(true)
    setIsError(false)
    try {
      const response = await axios.get(URL);
      if(response.data.Response === "False"){
        //console.log("error", response.data.Response.Error)
        throw Error(response.data.Error)
      }
      addNewMovies(response.data.Search);
      
    } catch (error) {
      console.log("inside catch")
      setIsError(true)
      console.log(error)
      setErrorMessage(error.message)
    }
    finally{
      setIsLoading(false)
    }
  }
  function handleSubmit(e){
    
    e.preventDefault()
    fetchMovies()
  }
  return (
    <form className={`container ${styles.form}`} onSubmit={handleSubmit}>
      <input type='text' onChange={(e)=>setMovieName(e.target.value)} value={movieName} placeholder='Movie Name'/>
      <button type='submit'>Search</button>
    </form>
  )
}

export default MovieSearchForm