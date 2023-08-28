import './App.css'
import {Routes, Route} from 'react-router-dom'

import ProjectsListPage from "./Pages/ProjectsList";
import AddProject from './Pages/AddProject';

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<ProjectsListPage/>}/>
      <Route path="/projects/create" element={<AddProject/>}/>
    </Routes>
    </div>
  )
}

export default App
