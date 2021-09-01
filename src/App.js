import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Background from './background.jpg'

const App = () => {
  const [showHomeImage, setShowHomeImage] = useState(true)
  return (
    <div className="app" id="bg-img" style={{ backgroundImage: showHomeImage && `url(${Background})` }}>
      <NavBar />
      <div className="content"> 
        <Home />
      </div>
    </div>
    // </div>
  );
}

export default App;
