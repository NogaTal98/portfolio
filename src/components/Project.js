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
                {project.description}
            </div>}
            <img src={project.image} alt='wordle' className='projectImage'/>
        </div>
    );
}

export default Project;