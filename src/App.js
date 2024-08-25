// App.js
import './App.css';
import React, { useState } from 'react';
import ContactIcons from './components/ProfileIcons';
import InformationText from './components/InfoText';
import ProfileImage from './media/profilephoto.jpg';
import StateProvider from './components/StateProvider';

function App() {

  const [isActive, setIsActive] = useState(false);

    const handleAboutClick = (newState) => {
        setIsActive(newState); // Update the active state based on the icon click
    };

    return (
      <div className="App">
        <StateProvider>
        </StateProvider>
      </div>
    );
}

export default App;
