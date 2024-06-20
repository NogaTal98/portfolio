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
                <h href={project.link} target="_blank" className='projectLink'>Demo link</h> <br></br>
                <h href={project.github} target="_blank" className='projectGit'>Github link</h>
            </div>}
            <img src={project.image} alt='wordle' className='projectImage'/>
        </div>
    );
}

export default Project;