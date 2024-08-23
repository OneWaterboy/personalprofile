import React, { useContext } from 'react';
import StateContext from './StateContext';
import ProfileImage from '../media/profilephoto.jpg';
import ProfileIcons from './ProfileIcons';

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
                <ProfileIcons />
                <p className="greeting-text"> 
                    I’m a highly analytical and detail-oriented professional who loves spending my free time mountaineering. I've successfully summited over 100 challenging peaks, 
                    which has honed my problem-solving skills and taught me the value of preparation and perseverance. 
                    Just as I carefully plan and navigate challenging climbs, I apply the same meticulous approach to solving complex problems in my professional life.
                    </p>
                <p className="greeting-text"> 
                    My mountaineering experiences have taught me resilience, strategic thinking, and the importance of precision, and they have also taught me how to apply these skills 
                    to every project and endeavor in my professional life.  
                </p>
                <p className="greeting-text">In short, I thrive on delivering results with unwavering accuracy and crystal-clear clarity.</p>
                {/* <h1>Abrahm Rollins</h1>
                <h2>Front End Developer &#183; Mountaineer</h2> */}
                {/* <button id="showCarousel" className={isActive ? 'hide-button' : ''}>See My Work</button> */}
            </div>
        </div>
    )
}

export default WelcomeLayout;