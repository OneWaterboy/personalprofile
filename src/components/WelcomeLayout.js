import ProfileImage from '../media/splash-image.jpg';

function WelcomeLayout(){
    return(
        <div id="spalshWelcome">
            <div id="welcomeImage">
                <img src={ProfileImage} alt="Abrahm" id="abrahmImage" />
            </div>
            <div id="welcomeText">
                <h1>Hi, I'm Abrahm</h1>
                <button id="showCarousel" className="carousel-button">See My Work</button>
            </div>
        </div>
    )
}

export default WelcomeLayout;