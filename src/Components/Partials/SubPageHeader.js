import React from 'react';
import Icon from './Icon';

const SubPageHeader = props => {
  return(
    <div className="subPageHeader-container">
      <Icon name="icon-header" />

      <div className="subPageHeader-text">
        <div className="subPage-content">
          <span className="res-heading">{props.subtitle}</span>
          <h1>{props.mainTitle}</h1>
          <p>{props.summary}</p>
          <a className="button-link" target="_blank" 
            rel="noopener noreferrer" href={props.link}>{props.linkName}</a>
        </div>
      </div>
    </div>
  );
};

export default SubPageHeader;
