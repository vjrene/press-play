import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPageMini = props => {
  return(
    <div className="relatedPageMini hover-underline">

      <div className="icon"></div>
      <Link to={'/' + props.link}><div className="title"><h5>{props.title}</h5></div></Link>
    </div>
  );

}

export default RelatedPageMini;