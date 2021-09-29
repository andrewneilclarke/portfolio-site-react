// import { NavLink } from 'react-router-dom'
// import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
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

                    <Link to="/"><div className="portrait"></div></Link>

                </div>
                <ul className={!showMenu ? "menu-nav show" : "menu-nav"}>
                    <li className="nav-item">

                        <Link to="/" onClick={toggleMenu} className={!showMenu ? "nav-link show" : "nav-link"} alt="about"><div className="portrait"></div></Link>

                        <Link to="/about" onClick={toggleMenu} className={!showMenu ? "nav-link show" : "nav-link"} alt="about">About Me</Link>
                        <Link to="/projects" onClick={toggleMenu} className={!showMenu ? "nav-link show" : "nav-link"} alt="projects">Projects</Link>
                        <Link to="/services" onClick={toggleMenu} className={!showMenu ? "nav-link show" : "nav-link"} alt="services">My Services</Link>
                        <Link to="/contact" onClick={toggleMenu} className={!showMenu ? "nav-link show" : "nav-link"} alt="contact">Hire / Contact me</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar
