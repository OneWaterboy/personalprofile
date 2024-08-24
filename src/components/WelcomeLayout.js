import ProfileImage from '../media/profilephoto.jpg';
import ContactIcons from './ProfileIcons';
import InformationText from './InfoText';

function WelcomeLayout(){

    return(
        <div id="spalshWelcome">
            <div id="welcomeText">
                <div id="welcomeImage">
                    <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
                </div>
                <h1>Hi, I’m Abrahm.</h1>
                <ContactIcons />
                <InformationText />
            </div>
        </div>
    )
}

export default WelcomeLayout;