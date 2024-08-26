import react from 'react';
import ReactPlayer from 'react-player/file'


function Project({project}) {

    const [clicked, setClicked] = react.useState(false);

    const projectClicked = () => {
        setClicked(!clicked);
        console.log(clicked);
    }
      
    return (
        <div className={'project'} onClick={projectClicked}>
            {clicked && <div className='projectClicked'>
                <div className='projectName'> {project.name} </div>
                <div className='projectDescription'> {project.description} </div>
                {project.link && <a href={project.link} target="_blank" className='projectLink'>Demo</a>}
                {project.github && <a href={project.github} target="_blank" className='projectGit'>Code</a>}
                <div className='technologies'> {project.technologies} </div>
            </div>}
            {project.image ? 
                <img src={project.image} alt='projectImage' className='projectImage'/> :
                <ReactPlayer url={project.video} controls={true} height='100%' width='100%'/>}
        </div>
    );
}

export default Project;