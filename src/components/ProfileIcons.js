import GithubIcon from '../media/github.png';
import EmailIcon from '../media/gmail.png';
import CellPhoneIcon from '../media/mobile-call.png';
import ResumeIcon from '../media/resume.png';


function ContactIcons(){
    return(
        <div className="contact-icons">
            <div className="icons-box">
                <a className="resume-icon" href="Resume" target="_blank" rel="noreferrer"><img src={ResumeIcon} alt="Resume Icon" /></a>
                <a className="email-icon" href="mailto:abrahmrollins@gmail.com" target="_blank" rel="noreferrer"><img src={EmailIcon} alt="Email Icon" /></a>
                <a className="phone-icon" href="tel:12063956074" target="_blank" rel="noreferrer"><img src={CellPhoneIcon} alt="Cellphone Icon" /></a>
                <a className="github-icon" href="https://github.com/OneWaterboy" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github Icon" /></a>
            </div>
        </div>
    )
}

export default ContactIcons;