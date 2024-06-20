import react from 'react';
import Project from '../components/Project';
import data from '../data/projectsInfo.json';
import './projects.css';

function Projects() {
  
    return (
        <div className='grid'>
            {data.map((project) => {
                return (
                    <Project project={project} key={project.id}/>
                );
            })}
        </div>
    );
}

export default Projects;