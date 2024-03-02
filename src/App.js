import './App.css';
import ContactIcons from './components/ProfileIcons';
import WelcomeLayout from './components/WelcomeLayout';
import WorkExamples from './components/WorkExamples';

function App() {
  return (
      <div className="App">
        <div id="splashArea">
          <div id="topBar">
            <ContactIcons />
          </div>
          <div id="splashGreeting">
            <WelcomeLayout />
            <WorkExamples />
          </div>
        </div>
    </div>
  );
}

export default App;
