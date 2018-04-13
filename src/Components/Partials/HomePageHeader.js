import React from 'react';
import { Link } from 'react-router-dom';
// import { Background } from '../Images/this-is.png'

const HomePageHeader = props => {

  const imageUrl = require(`../../Images/${props.imageName}`);

  return(
    <div className="homePageHeader-container" style={{ backgroundImage: `url(${imageUrl})` }}>
    
      <div>
      {/* <img src={require('../Images/this-is.png')} /> */}
        <h1>{props.title}</h1>
        <p>{props.summary}</p>
        <Link to={'/this-is'} className="button-link">Launch</Link>
      </div>

    </div>
  );
};

export default HomePageHeader;