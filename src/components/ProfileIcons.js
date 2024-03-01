import GithubIcon from '../media/github.png';
import EmailIcon from '../media/gmail.png';
import PhoneIcon from '../media/phonecall.png';
import ResumeIcon from '../media/resume.png';
import LinkedinIcon from '../media/linkedin.png';


function ContactIcons(){
    return(
        <div className="contact-icons">
            <div className="icons-box">
                <a className="email-icon" href="mailto:abrahmrollins@gmail.com" target="_blank" rel="noreferrer"><img src={EmailIcon} alt="Email Icon" /></a>
                <a className="phone-icon" href="tel:12063956074" target="_blank" rel="noreferrer"><img src={PhoneIcon} alt="Cellphone Icon" /></a>
                <a className="linkedin-icon" href="https://www.linkedin.com/in/abrahmrollins" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="Github Icon" /></a>
                <a className="github-icon" href="https://github.com/OneWaterboy" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github Icon" /></a>
            </div>
        </div>
    )
}

export default ContactIcons;