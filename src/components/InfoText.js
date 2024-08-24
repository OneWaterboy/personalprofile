import React from 'react';
import { useState } from 'react';

function InformationText({ isActive }) {
    return (
        <div id="infoTextBox">
            <p className={`greeting-text ${isActive ? 'active' : ''}`}>
                I’m a highly analytical and detail-oriented professional who loves spending my free time mountaineering. I've successfully summited over 100 challenging peaks, 
                which has honed my problem-solving skills and taught me the value of preparation and perseverance. 
                Just as I carefully plan and navigate challenging climbs, I apply the same meticulous approach to solving complex problems in my professional life.
            </p>
            <p className={`greeting-text ${isActive ? 'active' : ''}`}>
                My mountaineering experiences have taught me resilience, strategic thinking, and the importance of precision, and they have also taught me how to apply these skills 
                to every project and endeavor in my professional life.  
            </p>
            <p className={`greeting-text ${isActive ? 'active' : ''}`}>
                In short, I thrive on delivering results with unwavering accuracy and crystal-clear clarity.
            </p>
        </div>
    );
}

export default InformationText;
