import '../img/email.jpg' 
import {FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import {IconContext} from "react-icons"
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
    return (
        <div className="socials">
            <p>Contact Info.</p>
                <div> 
                    
                    <IconContext.Provider value={{ style: {fontSize: '30px', color: "crimson"}}}>
                    <div>
                    <FaEnvelope /> andrewneilclarke@gmail.com
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
                    <div>
                    <FaTwitter /> andrewclarke2u
                    </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ style: {fontSize: '30px', color: "#9e288a"}}}>
                    <div>
                    <FaInstagram /> @andrewclarkeweb
                    </div>
                    </IconContext.Provider>
                    <SocialIcon url="https//twitter.com/andrewclarke2u" />
                </div>
        </div>
    )
}

export default Contact
