import React, { Component } from 'react';
import SubPageHeader from '../Partials/SubPageHeader';
import RelatedPages from '../Partials/RelatedPages';
// import MiniNav from '../Partials/MiniNav';

class GoodVibes extends Component {
  render() {
    document.title = "Good Vibes | Spotify Internship Application";
    return(
        <div className="page-container good-container">

          <div id="good-vibes">
            <SubPageHeader
              subtitle="About this Project"
              mainTitle="Good Vibes!"
              summary="Having good vibes about Vanessa's application? Wanna 
              learn more about this project and how she built it? Look no more."
              link="https://github.com/vjrene/"
              linkName="github: @vjrene"
              imageUrl = "this-is.png" />
          </div>
{/* 
            <MiniNav
              link1="#"
              link1Name="Inception"
              
              link2="#"
              link2Name="Process &amp; Toolbox"
              
              link3="#"
              link3Name="Playlist"
              /> */}

            <div className="app-content--text">

              <div className="text">
              <h5 id="#inception">Inception</h5>
              <p>I knew that I’d need to be more creative with my approach than just a 
                traditional resume and cover letter. And what better way to show off my 
                new front end web development skills than with a tailored mini-site as 
                my application?</p>

                <p>The idea came to me after attending a panel with members of the 
                  Spotify team at a Women in Computer Science event at Barnard College. After hearing 
                  about their experiences with applying, I decided I would definitely 
                  need to think outside of the box.</p>
                  
                  <h5 id="#process">Process &amp; Toolbox</h5>
                  <p>I’ve realized that as a visual person, I do my best work once 
                    I’ve had the chance physically map things out so I can easily 
                    refer back to how everything is supposed to look. As I’m 
                    still coming into my development style, I need to work
                     with designs before I can jump into coding.</p>

                  <p>I began sketching out multiple designs, but ultimately, 
                    I wanted to take some visual cues from both the Spotify Web 
                    Player and the native desktop application.</p>

                    <div className="progress-pics">
                      <img alt="sketch for mobile version of the site" src={require('../../Images/process/sketch_mobile1.png')} />
                      <img alt="sketch for the icon header component" src={require('../../Images/process/sketch_icon-header.jpg')} />
                    </div>


                <p>The sketches then became wireframes that I mocked up in Adobe Photoshop, 
                with some elements in Illustrator as well. Once I had a visual representation 
                of how I wanted elements to lay on the page, it became easier for me to 
                understand how I would have to go about coding the site.</p>

                <div className="progress-pics-alt">
                      <img alt="desktop mockup for ultimate applicant component" src={require('../../Images/process/mockup_ultimate.png')} />
                      <img alt="mobile mockup for ultimate applicant component" src={require('../../Images/process/mockup_ultimate-mobile.png')} />
                    </div>

                <p>
                As for my development toolbox, I knew that I wanted to use this application 
                as an opportunity to expand my knowledge with single page applications. 
                I had some experience using Angular in building the [Iron Deficiency Day website] 
                (read about that process here!) and, still while in the process of creating my 
                personal portfolio (still a work in progress, but check up on its status &nbsp;
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/vjrene/portfolio-redesign">here</a>!) 
                but since the Spotify Web App uses React, I figured I would try my hand at this 
                JavaScript library as well.
                </p>

                <p>
                After going through few basic, "Hello World"-type tutorials in order to better familiarize myself with the 
                structure of how React works, I was able to start mocking things up with the JSX elements 
                and Sass for styling.
                </p>

                <p>At its core, this application is really representative of a static site with multiple pages. 
                  Each of these pages have similar elements, be it a header across the top, a small menu with 
                  related links on the side, buttons, icons and their descriptions. The entire application would 
                  be contained within a navigation frame that wouldn’t need to change its contents: on desktop 
                  and tablet, the browser would need to render a sidebar for the navigation; on mobile it would 
                  need to render the navigation across the bottom of the screen.</p>

                <p>
                Keeping in mind what I learned about single page applications from building the Iron 
                Deficiency Day site in Angular, I knew I would need a HashRouter to handle navigating
                 between pages in order to prevent the site from crashing upon page refreshes, or upon 
                 navigating to any direct sub-pages within the app.
                </p>

                <p>
                I learned to really appreciate React’s reusable components. Every page of this 
                application uses at least one element that is used somewhere else in a similar 
                capacity. For example, the header section used on most of the sub-pages beyond the 
                index has an “album cover” icon, description heading, main title, summary and button link.
                </p>

                <p>The icon was a simple component that needed to change based on the class in order for 
                  it to have a dynamic background image.</p> 

                  <div className="progress-pics">
                      <img alt="code for icon component" src={require('../../Images/process/icon-component.png')} />
                    </div>

                <p>
                I knew that I would be using these elements throughout the site, so I built a header 
                component that was easily inserted across all the pages I’d need it in.
                </p>

                <div className="progress-pics">
                    <img alt="good vibes header" src={require('../../Images/process/good-vibes-heading.png')} />
                      <img alt="good vibes header code" src={require('../../Images/process/sub-page-header-code.png')} />
                    </div>

                <p>Including it everywhere was as easy as importing the component in, and tagging
                  it with all the appropriate properties, from within the JSX!</p>

                <h5 id="#playlist">Playlist</h5>
                <p>I wouldn't have been able to complete this project without having great music to 
                  keep me focused and inspired throughout the process -- check out the 
                  playlist of songs that got me through this project!</p>

                  <a rel="noopener noreferrer" target="_blank" className="button-link" href="https://open.spotify.com/user/1247965666/playlist/5Hvnvh43RN17NpEpBdQBd7">stayCool.js</a>

            </div>

              <RelatedPages
              title1="Ultimate Applicant"
              link1="ultimate-applicant"

              title2="Top Hits"
              link2="top-hits"

              title3="Discover More"
              link3="discover-more" />
            
            </div>

        </div>
    );
  }
}
export default GoodVibes;
