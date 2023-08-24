import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
//import projectsData from "../../assets/data/project-data.json";
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState(props.projects);
 
 
  
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.id} className="project">
            <Link to={`/projects/${project._id}`}>{project.name}</Link>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default ProjectsPage;