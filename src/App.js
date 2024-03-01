import './App.css';
import ContactIcons from './components/ProfileIcons';
import WelcomeText from './components/WelcomeText';
import WorkCarousel from './components/WorkExamples';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
      <div className="App">
        <div id="splashArea">
          <div id="topBar">
            <ProfileImage />
            <ContactIcons />
          </div>
          <div id="personalInfo">
            <WelcomeText />
          </div>
          <div id="devloperInfo">
            <WorkCarousel />
          </div>
        </div>
    </div>
  );
}

export default App;
