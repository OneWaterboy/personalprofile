import GithubIcon from '../media/github.png';
import EmailIcon from '../media/gmail.png';
import PhoneIcon from '../media/phonecall.png';
import LinkedinIcon from '../media/linkedin.png';
import H2HLogo from '../media/snowyridge.png';


function ContactIcons(){
    return(
        <div className="contact-icons">
                <a className="email-icon" href="mailto:abrahmrollins@gmail.com" target="_blank" rel="noreferrer"><img src={EmailIcon} alt="Email Icon" /></a>
                <a className="phone-icon" href="tel:640273923491" target="_blank" rel="noreferrer"><img src={PhoneIcon} alt="Cellphone Icon" /></a>
                <a className="linkedin-icon" href="https://www.linkedin.com/in/abrahmrollins" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="Github Icon" /></a>
                <a className="hike2hike-icon" href="https://www.hike2hike.com" target="_blank" rel="noreferrer"><img src={H2HLogo} alt="Github Icon" /></a>
                <a className="github-icon" href="https://github.com/OneWaterboy" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github Icon" /></a>
        </div>
    )
}

export default ContactIcons;