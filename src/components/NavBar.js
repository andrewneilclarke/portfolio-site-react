import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (    
        <header>
            <div className={!showMenu ? "menu-btn close" : "menu-btn"} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={!showMenu ? "menu show" : "menu"}>
                <div className={!showMenu ? "menu-branding show" : "menu-branding"}>
                    <div className="portrait"></div>
                </div>
                <ul className={!showMenu ? "menu-nav show" : "menu-nav"}>
                    <li className="nav-item">
                        <a href="!#" className={!showMenu ? "nav-link show" : "nav-link"} alt="about">About</a>
                        <a href="!#" className={!showMenu ? "nav-link show" : "nav-link"} alt="services">My Services</a>
                        <a href="!#" className={!showMenu ? "nav-link show" : "nav-link"} alt="projects">Projects</a>
                        <a href="!#" className={!showMenu ? "nav-link show" : "nav-link"} alt="contact">Hire / Contact me</a>
                    </li>
                </ul>
            </nav>
            
        </header>     
    )
}

export default NavBar
