import React, { useContext } from 'react';
import StateContext from './StateContext';
import ProfileImage from '../media/splash-image.jpg';

function WelcomeLayout(){
    
    const { isActive, setIsActive } = useContext(StateContext);

    const handleClick = () => {
        setIsActive(!isActive); // This will toggle the isActive state
    };

    const closePortfolioClick = () => {
        setIsActive(false); // This will set the isActive state to false
    };

    return(
        <div id="spalshWelcome" className={isActive ? 'profile-open' : ''}>
            <div id="welcomeImage">
                <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
            </div>
            <div id="welcomeText">
                <h1>Abrahm Rollins</h1>
                <h2>Front End Developer &#183; Mountaineer</h2>
                <button id="showCarousel" className={isActive ? 'hide-button' : ''}>See My Work</button>
            </div>
        </div>
    )
}

export default WelcomeLayout;