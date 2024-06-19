import react from 'react';
import wordle from '../pictures/wordle.jpg';
import wikispeedrun from '../pictures/wiki-speed-run.jpg';
import mouserace from '../pictures/mouse_race.jpg';

function Projects() {
    
    const [projects, setProjects] = react.useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
  
    return (
        <div className='grid'>
            {projects.map((project) => {
                return (
                    <div className='project' key={project}>
                        <img src={wordle} alt='wordle' className='projectImage'/>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;