import styles from "./styles.module.css";
import { useState } from "react";
import MovieSearchForm from "../../MovieSearchForm";
import MovieList from "../../MovieList";
import spinner from "../../assets/spinner.jpg"

const Main = () => {
	const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    function addNewMovies(newMoviesArray){
        setMovies(newMoviesArray)
        
    }
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>NetChill</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<MovieSearchForm 
        addNewMovies={addNewMovies}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        />
       
        {isLoading ? (
        <img src={spinner} alt="Loading..."
        className="spinner" />
        ) : (  
            <>
            {isError ? (<h1 style={{textAlign: "center", margin: "2rem auto"}}>{errorMessage}</h1>
            ) : ( 
            <MovieList movies={movies} 
           
        />
        )}
        </>
        )}
		</div>
	);
};

export default Main