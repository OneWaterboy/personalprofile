import React, { useState, useEffect } from 'react';
import { projects } from '../projects';

function WorkExamples(){
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const button = document.getElementById('showCarousel');
        const handleClick = () => setIsActive(true);
        button.addEventListener('click', handleClick);

        // Clean up the event listener when the component unmounts
        return () => button.removeEventListener('click', handleClick);
    }, []);

    return(
        <div id="portfolioExamples" className={isActive ? 'active' : ''}>
            {Object.values(projects).map((project, index) => (
                console.log(project.img),
                <div key={index} className="project">
                    <img src={project.img} alt={project.desc} />
                    <div className='project-details'>
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <a href={project.link}>Visit {project.name}</a>
                        <div className='tech-badges'>
                            {
                                Array.isArray(project.tech) && project.tech.map((tech, index) => (
                                    <img className='tech-badge' key={index} src={tech} alt={`Tech ${index + 1}`} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkExamples;