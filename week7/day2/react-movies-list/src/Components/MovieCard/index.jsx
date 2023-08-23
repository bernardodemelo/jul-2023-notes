function MovieCard(props){
    const {movie, clickToDelete} = props;

    return(
        <div>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>IMDB Rating: {movie.IMDBRating}</p>
            {
                movie.hasOscars? 
                <p>Got the Award!</p> 
                : 
                <p>Great movie, but keep trying!</p>
            }
            <button onClick={()=> clickToDelete(movie._id)}>
                Delete
            </button>
        </div>
    )
}

export default MovieCard;