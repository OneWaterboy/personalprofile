import './App.css';
import ContactIcons from './components/ProfileIcons';
import WelcomeText from './components/WelcomeText';

function App() {
  return (
      <div className="App">
        <div id="splashArea">
          <div id="personalInfo">
            <WelcomeText />
            <ContactIcons />
          </div>
        </div>
    </div>
  );
}

export default App;
