import React from 'react';

const Icon = props => {
  return(
    <div className="icon-container">
      <div className={props.name}></div> 
    </div>
  );
}
export default Icon;
