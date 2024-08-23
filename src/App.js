import './App.css';
import React, { useState, useEffect } from 'react';
import StateContext from './components/StateContext';
import ContactIcons from './components/ProfileIcons';
import WelcomeLayout from './components/WelcomeLayout';
import WorkExamples from './components/WorkExamples';

function App() {
  const [isActive, setIsActive] = useState(false);


  // useEffect(() => {
  //   // const button = document.getElementById('showCarousel');
  //   const handleClick = () => setIsActive(true);
  //   button.addEventListener('click', handleClick);

  //   // Clean up the event listener when the component unmounts
  //   return () => button.removeEventListener('click', handleClick);
  // }, []);

  useEffect(() => {
    const portfolio = document.getElementById('closePortfolio');
    const closePortfolioClick = () => setIsActive(false);
    portfolio.addEventListener('click', closePortfolioClick);

    // Clean up the event listener when the component unmounts
    return () => portfolio.removeEventListener('click', closePortfolioClick);
  }, []);


  return (
      <div className="App">
        <div id="splashArea">
          <div id="splashGreeting">
            <StateContext.Provider value={{ isActive, setIsActive }}>
              <WelcomeLayout />
              <WorkExamples />
            </StateContext.Provider>
          </div>
        </div>
    </div>
  );
}

export default App;
