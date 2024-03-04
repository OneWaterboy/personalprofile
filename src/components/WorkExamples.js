import React, { useContext } from 'react';
import StateContext from './StateContext';
import Project from './Project';

function WorkExamples(){
    const { isActive, setIsActive } = useContext(StateContext);
    
    const handleClick = () => {
        setIsActive(!isActive); // This will toggle the isActive state
    };

    const closePortfolioClick = () => {
        setIsActive(false); // This will set the isActive state to false
    };

    return(
        <div id="portfolioPopUp"className={isActive ? 'active' : ''} >
            <span id="closePortfolio">X</span>
            <h1 className="portfolio-header" >My Portfolio</h1>
            <div id="portfolioExamples">
                <Project />
            </div>
        </div>
    )
}

export default WorkExamples;