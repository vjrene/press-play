import React, { Component } from 'react';
import SubPageHeader from '../../Partials/SubPageHeader';
import RelatedPages from '../../Partials/RelatedPages';
// import Icon from '../../Partials/Icon';

class Idday extends Component {
  render() {
    return(
      <div className="page-container project-container idday-container">

<div id="idday">
          <SubPageHeader
            subtitle="Projects"
            mainTitle="Iron Deficiency Day"
            summary="A website built to encourage awareness 
            about iron deficiency and iron deficiency anemia"
            link="http://irondeficiencyday.com/#/"
            linkName="Live Site" />
          </div>

          <div className="app-content--text">

<div className="text">

<h5 id="#inception">The Task:</h5>
              <p>Implement wireframe designs for the Iron Deficiency Day website.</p>

<h5 id="#process">Process &amp; Features</h5>
  <p><strong>Decide on framework</strong><br />
  I had the freedom to pick how I wanted to build this site, and wasn’t 
  boxed in to any specific tool. I decided to use this opportunity to learn
   how to implement single page applications with Angular.
  </p>

  <p><strong>Handle Backend Components</strong><br />
  One of the hurdles I had to overcome was displaying tweets from the Iron Deficiency 
  Twitter feed. I needed to use Twitter’s API to display tweets in the site. 
  I ended up deploying a Node app to Heroku that would handle calls to Twitter to 
  display the tweets on the page.
  </p>

</div>

<RelatedPages
              title1="vanessography"
              link1="projects/vanessography"

              title2="Erongo"
              link2="projects/erongo"

              title3="Top Hits"
              link3="top-hits" />

</div>
      
      </div>
    );
  }
}

export default Idday;