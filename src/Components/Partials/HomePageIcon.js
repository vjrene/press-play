import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const HomePageIcon = props => {
  return(
    <div className="HomePageIcon-container">
      <Link to={'/' + props.iconLink}><Icon name="icon-album" /></Link>

      <div className="text">
        <div>
          <h3>{props.title}</h3>
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageIcon;
