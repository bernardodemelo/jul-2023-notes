import {useParams, Link} from 'react-router-dom';
import projectsData from "../../assets/data/project-data.json";
import {useState, useEffect} from 'react';

function ProjectDetailsPage(props){
    const [foundProject, setFoundProject] = useState(null);

    const {projectId} = useParams();

    useEffect(()=>{
        const project = projectsData.find((oneProject)=>{
            return oneProject._id === projectId;
        })

        if(project){
            setFoundProject(project);
        }

    }, [projectId]);


    return(
        <div>
            <h1>Project Details</h1>

            {!foundProject && <h3>Project not found!</h3>}

            {foundProject && (
                <div>
                    <h2>{foundProject.name}</h2>
                    <h3>Tech Stack: {foundProject.technologies}</h3>
                    <p>{foundProject.description}</p>
                    <Link to="/projects">Back</Link>
                </div>
            )} 
        </div>
    )

}

export default ProjectDetailsPage