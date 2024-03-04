import React, { useState, useEffect } from 'react';
import Project from './Project';

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
            <Project />
        </div>
    )
}

export default WorkExamples;