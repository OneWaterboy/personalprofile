// App.js
import './App.css';
import React from 'react';
import StateProvider from './components/StateProvider'; // Updated import path
import WelcomeLayout from './components/WelcomeLayout';

function App() {
    return (
        <div className="App">
            <div id="splashArea">
                <StateProvider>
                </StateProvider>
            </div>
        </div>
    );
}

export default App;
