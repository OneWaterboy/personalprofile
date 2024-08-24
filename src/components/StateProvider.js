// StateProvider.js (Renamed from StateContext)
import React, { useState } from 'react';
import StateContext from './StateContext';
import ContactIcons from './ProfileIcons';
import InformationText from './InfoText';
import ProfileImage from '../media/profilephoto.jpg';

function StateProvider() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    };

    return (
        <StateContext.Provider value={{ isActive, setIsActive }}>
            <div className="welcome-info">
                <div id="welcomeImage">
                    <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
                </div>
                <h1>Hi, I’m Abrahm.</h1>
                <ContactIcons onAboutClick={handleClick} />
                <InformationText isActive={isActive} />
            </div>
        </StateContext.Provider>
    );
}

export default StateProvider;
