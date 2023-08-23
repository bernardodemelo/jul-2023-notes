function MovieCard(props){
    const {movie} = props; 

    return(
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.director}</p>
        </div>
    )
}

export default MovieCard;