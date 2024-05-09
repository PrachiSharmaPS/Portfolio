
import './App.css';
import Header from './Screens/Header';
import Body from './Screens/Body';
import Project from './Components/Project';
import Achivment from './Components/Achivment';

function App() {
  return (
    <div className="app-container">
    <Header />
    <div className="body-container">
      <Body />
    </div>
    <Project />
    <Achivment/>
  </div>
  );
}

export default App;
