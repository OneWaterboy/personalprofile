import './App.css';
import ContactIcons from './components/ProfileIcons';
import WelcomeLayout from './components/WelcomeLayout';
import WorkCarousel from './components/WorkExamples';

function App() {
  return (
      <div className="App">
        <div id="splashArea">
          <div id="topBar">
            <ContactIcons />
          </div>
          <div id="splashGreeting">
            <WelcomeLayout />
          </div>
          <div id="devloperInfo">
            <WorkCarousel />
          </div>
        </div>
    </div>
  );
}

export default App;
