import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    const toggleMenu = () => {
        if(!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));
            setShowMenu(true)
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));
            setShowMenu(false);
        }
    }

    return (    
        <header>
            <div className="menu-btn" onClick={toggleMenu}>
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
