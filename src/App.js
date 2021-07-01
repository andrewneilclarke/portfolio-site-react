import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Pages from './components/Pages'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
     <Router>
       <NavBar />
      <Switch>
        <Route component={Home}path="/" exact />
        <Route component={About}path="/About" />
        <Route component={Blog}path="/Blog" />
        <Route component={Pages}path="/Pages" />
        <Route component={Projects}path="/Projects" />
        <Route component={Portfolio}path="/Portfolio" />
        <Route component={Contact}path="/Contact" />

        <Contact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
