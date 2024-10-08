import React, { useState } from 'react';
import GithubIcon from '../media/github.png';
import EmailIcon from '../media/gmail.png';
import PhoneIcon from '../media/phonecall.png';
import LinkedinIcon from '../media/linkedin.png';
import H2HLogo from '../media/snowyridge.png';
import AboutIcon from '../media/information.png';

function ContactIcons({ onAboutClick }) {
    const handleIconClick = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        onAboutClick(); // Call the parent click handler to toggle the active class on `closeInfoBox`
    };

    return (
        <div id="contactIcons">
            <div className="icons-row">
                <a
                    id="aboutIcon"
                    onClick={handleIconClick}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={AboutIcon} alt="About Me Icon" />
                </a>
                <a
                    className="email-icon"
                    href="mailto:abrahmrollins@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={EmailIcon} alt="Email Icon" />
                </a>
                <a
                    className="phone-icon"
                    href="tel:640273923491"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={PhoneIcon} alt="Cellphone Icon" />
                </a>
            </div>
            <div className="icons-row">
                <a
                    className="linkedin-icon"
                    href="https://www.linkedin.com/in/abrahmrollins"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
                <a
                    className="hike2hike-icon"
                    href="https://www.hike2hike.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={H2HLogo} alt="Hike2Hike Icon" />
                </a>
                <a
                    className="github-icon"
                    href="https://github.com/OneWaterboy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={GithubIcon} alt="Github Icon" />
                </a>
            </div>
        </div>
    );
}

export default ContactIcons;
