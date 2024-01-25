import './App.css';
import ContactIcons from './components/ProfileIcons';
import WelcomeText from './components/WelcomeText';
import WorkCarousel from './components/WorkExamples';

function App() {
  return (
      <div className="App">
        <div id="splashArea">
          <div id="personalInfo">
            <WelcomeText />
            <ContactIcons />
          </div>
          <div id="devloperInfo">
            <WorkCarousel />
          </div>
        </div>
    </div>
  );
}

export default App;
