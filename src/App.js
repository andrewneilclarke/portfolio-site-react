import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Contact from './components/Contact';
import './dist/style.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Services from './components/Services'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <div className="app w-screen h-screen">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home title='Andrew Clarke' />
            </Route>
            <Route path="/about">
              <About title='About Me' />
            </Route>
            <Route path="/services">
              <Services title='Services' />
            </Route>
            <Route path="/projects">
              <Projects title='Projects' />
            </Route>
            <Route path="/contact">
              <ContactForm title='Contact Me' />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
