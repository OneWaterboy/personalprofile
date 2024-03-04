import hike2hike from './media/project-screenshots/hike2hike.png';
import darbywinery from './media/project-screenshots/darbywinery.png';
import Css3 from './media/code-logos/css3.png';
import GoogleMapsAPI from './media/code-logos/google-maps-api.png';
import Html5 from './media/code-logos/html5_Logo.png';
import Jquery from './media/code-logos/jquery.png';
import Js from './media/code-logos/js.png';
import Php from './media/code-logos/php-logo.png';
import Wordpress from './media/code-logos/wordPress-logotype.png';
import Bootstrap from './media/code-logos/bootstrap.png';

// Purpose: Store project data for use in the projects section of the portfolio page
export const projects = {
    hike2hike: {
        img: hike2hike,
        name: 'Hike2Hike.com',
        desc: 'Hike2Hike is a fully custom WordPress theme for a hiking blog. The site was designed and developed by me and includes heavy use of the ACF plugin as well as a featured map developed using the Google Maps Javascript API',
        link: 'https://hike2hike.com',
        tech: [Css3,Html5,Wordpress,Php,Js,GoogleMapsAPI]
    },
    darbywinery: {
        img: darbywinery,
        name: 'Darby Winery',
        desc: 'Darby Winery is a fully customized WordPress website. The project involved reworking their entire site due to the need for a more modern and responsive design. The rebuild required Wireframing Using Figma, Custom WordPress Theme Development, and heavy use of the ACF plugin.',
        link: 'https://darbywinery.com',
        tech: [Wordpress,Bootstrap,Php,Jquery, Html5,Css3]
    },
}