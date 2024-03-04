import { projects } from '../projects';

function Project(){ 
    return(
        <>
            {Object.values(projects).map((project, index) => (
            <div key={index} className="project">
                <div className='project-screenshot'>
                    <img src={project.img} alt={project.name} />
                </div>
                <div className='project-details'>
                    <h3>{project.name}</h3>
                    <div className='tech-badges'>
                        {
                            Array.isArray(project.tech) && project.tech.map((tech, index) => (
                                <img className='tech-badge' key={index} src={tech} alt={`Tech ${index + 1}`} />
                            ))
                        }
                    </div>
                    <p>{project.desc}</p>
                    <a target="_blank"rel="noreferrer" href={project.link}>Visit {project.name}</a>
                </div>
            </div>
            ))}
        </>
    )
}

export default Project;