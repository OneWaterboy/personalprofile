import React, { useState, useEffect } from 'react';
import ProfileImage from '../media/splash-image.jpg';

function WelcomeLayout(){
    
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const button = document.getElementById('showCarousel');
        const handleClick = () => setIsActive(true);
        button.addEventListener('click', handleClick);

        // Clean up the event listener when the component unmounts
        return () => button.removeEventListener('click', handleClick);
    }, []);


    return(
        <div id="spalshWelcome" className={isActive ? 'profile-open' : ''}>
            <div id="welcomeImage">
                <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
            </div>
            <div id="welcomeText">
                <h1>Hi, I'm Abrahm</h1>
                <button id="showCarousel" className={isActive ? 'hide-button' : ''}>See My Work</button>
            </div>
        </div>
    )
}

export default WelcomeLayout;