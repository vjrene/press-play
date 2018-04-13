import React from 'react';
import RelatedPageMini from './RelatedPageMini';

const RelatedPages = props => {
  return(
    <div className="relatedPages-container">
      <div>
        <h5>Related Pages</h5>

        <div className="hold-minis">
          <div className="first">
            <RelatedPageMini
              title={props.title1}
              link={props.link1} />
            </div>
        <div className="second">
          <RelatedPageMini
            title={props.title2}
            link={props.link2} />
        </div>

      <div className="third">
          <RelatedPageMini
            title={props.title3}
            link={props.link3} />
      </div>
          </div>

        </div>
      
    </div>
  );
};

export default RelatedPages;
