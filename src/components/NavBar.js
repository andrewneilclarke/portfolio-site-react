import '../Header.css'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar= () => {
    return (
        <header>
            <div className="header">  
                <nav className="container">
                        <h5 className="title">
                            <NavLink to="/">Andrew Clarke</NavLink>
                        </h5>
                            <div className="links"> 
                                <NavLink to="/About">About</NavLink>
                                <NavLink to="/Blog">Blog</NavLink>
                                <NavLink to="/Pages">Pages</NavLink>
                                <NavLink to="/Portfolio">Portfolio</NavLink>
                                <NavLink to="/Projects">Projects</NavLink>
                                <NavLink to="/Contact">Contact</NavLink>
                                
                                <SocialIcon url="https://twitter.com/andrewclarke2u" className="" target="_blank" fgColor="#FFF" style={{height: 35, width:35}} />
                                <SocialIcon url="https://facebook.com/andrewclarkewebdesign" className="" target="_blank" fgColor="white" style={{height: 35, width:35}} />
                                <SocialIcon url="https://youtube.com/andrewclarkewebdesign" className="" target="_blank" fgColor="white" style={{height: 35, width:35}} />
                                <SocialIcon url="https://linkedin.com/andrewclarkewebdesign" className="" target="_blank" fgColor="white" style={{height: 35, width:35}} />
                                <SocialIcon url="https://whatsapp.com/andrewclarkewebdesign" className="" target="_blank" fgColor="white" style={{height: 35, width:35}} />
                            </div>
                            
                            
                 </nav>      
            </div>
    
        </header>
    )
}

export default NavBar
