import {useState} from 'react';
import moviesData from "../../assets/data/movies.json";

import MovieCard from '../MovieCard';

function MovieList(){
    // State Variables
    const [movies, setMovies] = useState(moviesData);
    const [showMovies, setShowMovies] = useState(true);

    // Function Declaration
    const toggleShowMovies = () =>{
        setShowMovies(!showMovies);
    }

    const deleteMovie = (movieId) =>{
        const filteredMovies = movies.filter((movie)=>{
            return movie._id !== movieId;
        })
        setMovies(filteredMovies);
    }

    const resetMovies = () =>{
        setMovies(moviesData);
    }

    return(
        <div>
            <h2>Movie List</h2>
            <button onClick={toggleShowMovies}>
             {showMovies ? 'Hide': 'Show'}
            </button>
            <button onClick={resetMovies}>Reset Movies</button>
            {showMovies && movies.map((movie)=>{
                return(
                   <MovieCard 
                   key={movie._id}
                   movie={movie}
                   clickToDelete={deleteMovie} />
                )
            })}
        </div>
    )
}

export default MovieList;