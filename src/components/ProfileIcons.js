import GithubIcon from '../media/github.png';
import EmailIcon from '../media/gmail.png';
import CellPhoneIcon from '../media/mobile-call.png';
import ResumeIcon from '../media/resume.png';


function ContactIcons(){
    return(
        <div className="contact-icons">
            <a href="https://github.com/OneWaterboy" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github Icon" /></a>
            <a href="mailto:abrahmrollins@gmail.com" target="_blank" rel="noreferrer"><img src={EmailIcon} alt="Github Icon" /></a>
            <a href="Resume" target="_blank" rel="noreferrer"><img src={ResumeIcon} alt="Github Icon" /></a>
            <a href="tel:12063956074" target="_blank" rel="noreferrer"><img src={CellPhoneIcon} alt="Github Icon" /></a>
        </div>
    )
}

export default ContactIcons;