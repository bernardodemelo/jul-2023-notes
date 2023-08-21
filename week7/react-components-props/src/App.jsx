import './App.css'

import Button from "./Components/Button";
import Greeting from "./Components/Greeting";
import StudentList from "./Components/StudentsList";
import StudentCard from "./Components/StudentCard";

function App() {

  return (
    <div>
     <Button/>
     <Greeting firstName="Bruno Rápido" />
     <Greeting firstName="Ironhack" />
     <Greeting firstName="Nicolas BigMan Cage" />
     <StudentList>
      <StudentCard name="André" bootcamp="WebDev" week={7}/>
    </StudentList>
    </div>
  )
}

export default App
