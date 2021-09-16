import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
// import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
// import Background from './pexels2.jpg'
import Background from './pexels.jpg'

const App = () => {
  const [showHomeImage] = useState(false)
  return (
    <Router>
    <div className="app" id="bg-img" style={{ backgroundImage: showHomeImage && `url(${Background})` }}>
      <NavBar />
      <div className="content"> 
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/about">
              <Home />
            </Route>
          <Route path="/services">
              <Home />
            </Route>
          <Route path="/projects">
             <Projects />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
