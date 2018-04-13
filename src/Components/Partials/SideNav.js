import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = props => {
    return(
      <div className="desktop-nav hover-underline">
      <ul>
        <li><Link to={'/'}><i className="fa fa-home" aria-hidden="true"></i> <span className="link-text">Home</span></Link></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/1247965666"><i className="fa fa-spotify"></i> <span className="link-text">Spotify Profile</span></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="mailto:vjrene@gmail.com"><i className="fa fa-envelope-o"></i> <span className="link-text">Email</span></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/vjrene/"><i className="fa fa-github-alt"></i> <span className="link-text">GitHub</span></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vanessa-rene/"><i className="fa fa-linkedin" aria-hidden="true"></i> <span className="link-text">LinkedIn</span></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="http://www.vanessography.com/assets/Vanessa-Rene_resume-spotify-web.pdf"><i className="fa fa-newspaper-o"></i> <span className="link-text">Resume</span></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="http://vanessography.com/"><img className="v-logo" alt="vanessography.com" src={require('../../Images/v-logo.svg')} /> <span className="link-text">vanessography</span></a></li>
      </ul>
    </div>
    );
};

export default SideNav;