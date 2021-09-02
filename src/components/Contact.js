// import {FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
// import {IconContext} from "react-icons"
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
    return (
        
        <div className="icons">      
                    <ul>
                        <SocialIcon url="https://github.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://instagram.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://twitter.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://facebook.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://youtube.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://linkedin.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} />
                        <SocialIcon url="https://whatsapp.com/andrewclarkewebdesign" className="mx-1 my-4" target="_blank" fgColor="#d8d7d7" style={{height: 35, width:35}} /> 
                    </ul>
        </div>
       
    )
}

export default Contact
