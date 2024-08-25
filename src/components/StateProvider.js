import React, { useState } from 'react';
import ContactIcons from './ProfileIcons';
import InformationText from './InfoText';
import StateContext from './StateContext';
import ProfileImage from '../media/profilephoto.jpg';

function StateProvider() {
    const [isActive, setIsActive] = useState(false);

    const handleAboutClick = () => {
        setIsActive(true);
    };

    const handleCloseClick = () => {
        setIsActive(false);
    };

    return (
        <StateContext.Provider value={{ isActive, setIsActive }}>
            <div className="welcome-info">
                <div id="welcomeImage">
                    <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
                </div>
                <h1>Hi, I’m Abrahm.</h1>
                <div>
                    <ContactIcons onAboutClick={handleAboutClick} />
                    <InformationText isActive={isActive} onCloseClick={handleCloseClick} />
                </div>
            </div>
        </StateContext.Provider>
    );
}

export default StateProvider;
