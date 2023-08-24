import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ProjectsPage from './Pages/Projects';
import ErrorPage from "./Pages/Error";
import ProjectDetailsPage from './Pages/ProjectDetails'; // Added this

import projectsData from "./assets/data/project-data.json";

import {Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
      
        <Route path="/projects/:projectId" element={<ProjectDetailsPage/>}/>

        <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  );
}
export default App;