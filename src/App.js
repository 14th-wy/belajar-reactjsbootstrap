// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
      <Navigation/>
      <Intro/>
      </div>
      {/* Intro Section */}

      {/* Trending Section */}
      <div className='trending'>
      <Trending/>
      </div>
      {/* Trending Section */}

      {/* Superhero Section */}
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* Superhero Section */}
    </div>
  );
}

export default App;
