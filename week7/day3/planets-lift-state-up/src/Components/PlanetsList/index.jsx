import {useState} from 'react';
import planetsData from "../../assets/data/planets.json";

import PlanetCard from '../PlanetCard';
import Summary from '../PlanetSummary';

function PlanetList(){
    // State Variables
    const [planets, setPlanets] = useState(planetsData);
    const [planetsDeleted, setDeletedPlanets] = useState(0);
    
    // Function Declaration
    const deletePlanet = (planetId) =>{
        /* const filteredPlanets = planets.filter((planet)=>{
            return planet.id !== planetId;
        }) */

        // .forEach() example
        // Best Practice: create a copy of the state variable
        const planetsCopy = [...planets];

        planets.forEach((planet, index)=>{
            if(planet.id == planetId){
                planetsCopy.splice(index, 1);
            }
        })

        //setPlanets(filteredPlanets);
        setPlanets(planetsCopy);
        
        setDeletedPlanets(planetsDeleted + 1);
    }

    const resetPlanets = () =>{
       setPlanets(planetsData);
       setDeletedPlanets(0);
    }

    const deleteAllPlanets = () =>{
        setPlanets([]);
        setDeletedPlanets(planetsData.length);
    }


    return(
        <div>
            <h2>🪐 Planets List 🪐</h2>
            <button onClick={resetPlanets}>Reset All Planets</button>
            <button onClick={deleteAllPlanets}>Delete All Planets</button>
            {/* const planetsDeleted;
                res.render('<PlanetCard />', {planetsDeleted: planetsDeleted})
            */}
            <Summary planetsDeleted={planetsDeleted}/>
            {planetsDeleted < 9 && planets.map((planet)=>{
                return(
                   <PlanetCard
                   key={planet.id}
                   planet={planet}
                   clickToDelete={deletePlanet} />
                )
            })}
        </div>
    )
}

export default PlanetList;