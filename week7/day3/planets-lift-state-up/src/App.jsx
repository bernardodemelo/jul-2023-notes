import './App.css'
import PlanetList from './Components/PlanetsList'


// RECAP EXERCISE: PLANETS-REACT-PROJECT

// Use the planets.json data to: 
  // 1) Create a React Component that renders a List with all Planets. HINT: the planets.json data should be stored inside a State Variable ;) 

  // 2) Every Planet must be rendered as a Planet Card Component

  // 3) Every Planet Card must have the name of the planet, image, description.
  
  // 4) Every Planet Card must have a button to delete the planet. 

  // BONUS: Create a Button that deletes All Planets.

function App() {

  return (
   <div>
    <PlanetList/>
   </div>
  )
}

export default App
