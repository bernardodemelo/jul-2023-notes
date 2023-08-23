function PlanetCard(props){
    const {planet, clickToDelete} = props;

    return(
        <div>
            <h3>{planet.name}</h3>
            <img src={planet.image} width={200} height={200}></img>
            <p><b>Description:</b> {planet.description}</p>
            <button onClick={()=> clickToDelete(planet.id)}>
                Delete
            </button>
        </div>
    )
}

export default PlanetCard;