import React, { Component } from 'react';
import SubPageHeader from '../../Partials/SubPageHeader';
import RelatedPages from '../../Partials/RelatedPages';
// import Icon from '../../Partials/Icon';

class Erongo extends Component {
  render() {
    return(
      <div className="page-container project-container erongo-container">

<div id="erongo">
          <SubPageHeader
            subtitle="Projects"
            mainTitle="Erongo"
            summary="A WordPress store selling men’s + women’s 
            wallets/purses and home decor."
            link="http://erongo.icontest2.com"
            linkName="pre-production demo" />
          </div>



<div className="app-content--text">

<div className="text">

<h5 id="#inception">The Task:</h5>
              <p>Implement wireframe designs for an online store. </p>

<h5 id="#process">Process &amp; Features</h5>
  <p><strong>Research</strong><br />
  As this was my first WordPress project, I needed to follow through with some 
  tutorials to become more familiar with structure, and get a little more practice 
  with PHP.
  </p>

  <p><strong>Site Features</strong><br />
      <ul>
        <li>Implement site responsiveness with media queries</li>
        <li>Parallax scrolling with css</li>
        <li>Isotope.js for sorting animations</li>
        <li>WooCommerce plugin to handle all customer transactions</li>
      </ul>
  </p>
</div>

<RelatedPages
              title1="Iron Deficiency Day"
              link1="projects/idday"

              title2="vanessography"
              link2="projects/vanessography"

              title3="Top Hits"
              link3="top-hits" />

</div>
      
      </div>
    );
  }
}

export default Erongo;