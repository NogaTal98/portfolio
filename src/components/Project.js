import react from 'react';


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
                {project.link && <a href={project.link} target="_blank" className='projectLink'>Demo link</a>}
                {project.github && <a href={project.github} target="_blank" className='projectGit'>Github link</a>}
            </div>}
            <img src={project.image} alt='projectImage' className='projectImage'/>
        </div>
    );
}

export default Project;