import moviesData from "../../assets/data/movies.json";
import {useState} from 'react';
import MovieCard from "../MovieCard";
import AddMovie from "../AddMovie";

function MoviesList(){
    const [movies, setMovies] = useState(moviesData);

    const addNewMovie = (newMovie) =>{
        const updatedMovies = [...movies, newMovie];

        setMovies(updatedMovies);
    }

    return(
    <div>
        <h2>Movies List</h2>
        {movies.map((movie)=>{
            return (
            <MovieCard key={movie._id} 
            movie={movie} />
            )
        })}
        <AddMovie addNewMovie={addNewMovie}/>
    </div>
)

}

export default MoviesList