import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const NavBar = () => {
    
    
    return (    
        
        <header>
            <div className="menu-btn">
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
                <ul className="menu-nav">
                    <li className="nav-item">
                        <a href="!#" className="nav-link" alt="about">About</a>
                        <a href="!#" className="nav-link" alt="services">My Services</a>
                        <a href="!#" className="nav-link" alt="projects">Projects</a>
                        <a href="!#" className="nav-link" alt="contact">Hire / Contact me</a>
                    </li>
                </ul>
            </nav>
            
        </header>     
    )
}

export default NavBar
