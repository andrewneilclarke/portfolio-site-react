import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About'

const App = () => {
  const name = 'Andrew Clarke '
  return (
    <Router>
    <div className="app" id="bg-img">
      <NavBar />
      <div className="content"> 
        <Switch>
          <Route exact path="/">
              <Home name={name} />
          </Route>
          <Route path="/about">
              <About name={name} />
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
