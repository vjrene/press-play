import React, { Component } from 'react';
import SubPageHeader from '../../Partials/SubPageHeader';
import RelatedPages from '../../Partials/RelatedPages';
// import Icon from '../../Partials/Icon';

class Vanessography extends Component {
  render() {
    return(
  <div className="page-container project-container vanessography-container">

    <div id="vanessography">
          <SubPageHeader
            subtitle="Projects"
            mainTitle="vanessography"
            summary="Vanessa's photography, development &amp; design portfolio."
            link="https://vjrene.github.io/#/"
            linkName="in-progress demo" />
          </div>
      

<div className="app-content--text">

<div className="text">

<h5 id="#task">The Task:</h5>
              <p>Build a portfolio website that is responsive, visually interesting, and 
               displays the diversity of my interests, projects, and skills as a developer.
              </p>

<h5 id="#process">Process &amp; Toolbox</h5>
  <p><strong>Seek Out Inspiration</strong><br />

  The first portfolio I built a little over a year ago was in desperate 
  need of an upgrade. It was a relatively simple design, a static site built using html, css, and an ounce of 
  jQuery, and just did not reflect all the progress I'd made as a developer since I had initially launched it.
</p>

<div className="progress-pics-alt">
  <img alt="old desktop vanessography design" src={require('../../../Images/projects/portfolio/old-v.png')} />
  <img alt="old mobile vanessography design" src={require('../../../Images/projects/portfolio/old-v-mobile.png')} />
</div>

<p>Any points for it being responsive?</p>

<p>
  I searched through different designers' portfolios and design company sites (mostly on&nbsp;
  <a href="https://www.awwwards.com/websites/portfolio/" target="_blank" rel="noopener noreferrer">Awwwards</a>&nbsp;
  and <a href="http://www.creativebloq.com/" target="_blank" rel="noopener noreferrer">Creative Bloq</a>)
  just to get a feel of how others have laid things out on their pages, and the
  technology that they have used.
  </p>

  <p><strong>Sketch out thoughts</strong><br />
  I was reaching for a design that would still be minimal but interesting... Understated but still elegant.
  </p>

  <div id="v-sketches" className="progress-pics-alt">
      <img alt="sketch of the site" src={require('../../../Images/projects/portfolio/sketch-port.png')} />
      <img alt="sketch for project components of the site" src={require('../../../Images/projects/portfolio/sketch-proj.png')} />
    </div>

  <p><strong>Create Mockups</strong><br />
  Now the fun begins! I began mocking up elements in photoshop and Illustrator.
  </p>

  <div className="progress-pics-alt">
      <img alt="mockups of the home page on desktop" src={require('../../../Images/projects/portfolio/mockup-desktop.png')} />
      <img alt="mockups of the about page on mobile" src={require('../../../Images/projects/portfolio/mockup-about.png')} />
    </div>

    <div className="progress-pics-alt">
      <img alt="mockups of the project page on desktop" src={require('../../../Images/projects/portfolio/mockup-project-desk.png')} />
      <img alt="mockups of the project page on mobile" src={require('../../../Images/projects/portfolio/mockup-proj-mobile.png')} />
    </div>


  {/* <p><strong>Decide on the Angular framework</strong>
    Once 
  </p> */}

  <h5 id="#code">View Code</h5>
    <p>
      I began building this project using Angular.<br />
      <a className="button-link" target="_blank" rel="noreferrer noopener" href="https://github.com/vjrene/portfolio-redesign">GitHub</a></p>

<h5 id="#playlist">Playlist</h5>
            <p><a className="button-link" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/1247965666/playlist/0xjPoTxPOkWKG6sfnlP4R8">please please please</a></p>
</div>

<RelatedPages
              title1="Erongo"
              link1="projects/erongo"

              title2="Iron Deficiency Day"
              link2="projects/idday"

              title3="Top Hits"
              link3="top-hits" />

</div>

</div>
    );
  }
}

export default Vanessography;