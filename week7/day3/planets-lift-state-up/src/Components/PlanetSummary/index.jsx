function Summary(props){
    // same thing as: 
    // const planetsDeleted = props.planetsDeleted;
    const {planetsDeleted} = props;
    return(
        <div>
        <h3>Planets Deleted: {planetsDeleted}</h3>
        </div>
    )
}

export default Summary