import hike2hike from './media/project-screenshots/hike2hike.png';
import darbywinery from './media/project-screenshots/darbywinery.png';
import Css3 from './media/code-logos/css3.png';
import GoogleMapsAPI from './media/code-logos/google-maps-api.png';
import Html5 from './media/code-logos/html5_Logo.png';
import Jquery from './media/code-logos/jquery.png';
import Js from './media/code-logos/js.png';
import Php from './media/code-logos/php-logo.png';
import Wordpress from './media/code-logos/wordPress-logotype.png';

// Purpose: Store project data for use in the projects section of the portfolio page
export const projects = {
    hike2hike: {
        img: hike2hike,
        name: 'Hike2Hike.com',
        desc: 'Hike2hike was built as a fully customized WordPress theme. The site is a hiking blog that features custom post types for hikes and uses custom taxonomy for regions.',
        link: 'https://hike2hike.com',
        tech: [Css3,Html5,Wordpress,Php,Js,GoogleMapsAPI]
    },
    darbywinery: {
        img: darbywinery,
        name: 'Darby Winery',
        desc: 'Winery Website Built using WordPress',
    },
    brewing: {
        img: darbywinery,
        name: 'Darby Winery',
        desc: 'Winery Website Built using WordPress',
    }
}