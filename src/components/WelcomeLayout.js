import React, { useContext } from 'react';
import StateContext from './StateContext';
import ProfileImage from '../media/profilephoto.jpg';

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
            <div id="welcomeText">
                <div id="welcomeImage">
                    <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
                </div>
                <h1>Hi, I’m Abrahm.</h1>
                <p className="greeting-text"> I’m a highly analytical and detail-oriented professional who loves mountaineering. 
                    As I carefully plan and navigate challenging climbs, I apply the same meticulous approach to solving complex problems and analyzing data. 
                    My mountaineering experiences have taught me resilience, strategic thinking, and the importance of precision—skills I bring to every project. 
                    I thrive on turning data into actionable insights and delivering results with accuracy and clarity.</p>
                {/* <h1>Abrahm Rollins</h1>
                <h2>Front End Developer &#183; Mountaineer</h2> */}
                {/* <button id="showCarousel" className={isActive ? 'hide-button' : ''}>See My Work</button> */}
            </div>
        </div>
    )
}

export default WelcomeLayout;