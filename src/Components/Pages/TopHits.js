import React, { Component } from 'react';
import SubPageHeader from '../Partials/SubPageHeader';
import RelatedPages from '../Partials/RelatedPages';
import ResumeRole from '../Partials/ResumeRole';


class TopHits extends Component {
  render() {
    document.title = "Vanessa's Top Hits | Spotify Internship Application";
    return(
        <div className="page-container top-container">
          <div id="top-hits">
            <SubPageHeader
              subtitle="Resume"
              mainTitle="Vanessa's Top Hits"
              summary="Take a look at what she's done. All the 
              cool projects, she's created and the cool places she's worked. Basically, her resume."
              link="http://www.vanessography.com/assets/Vanessa-Rene_resume-spotify-web.pdf"
              linkName="Resume PDF" />
            </div>

<div className="app-content--text">

          <div className="text">

            <div className="education">
              <span className="res-heading">education</span>
              <div className="schools">
                <div>
                  <h4>Pace University</h4>
                  MS in Computer Science, 2017<br />
                  3.9/4.0
                </div>

                <div>
                  <h4>Macaulay Honors College</h4>
                  BA in Television/Radio, 2014<br />
                  3.9/4.0
                </div>
            </div>
          </div>

          <div className="skills">
              <span className="res-heading">Skills</span>
              <div className="schools">
                <div>
                  <p><span className="green-text"><strong>Languages:</strong></span> HTML5, CSS3 + SASS, JavaScript, PHP, Java, SQL<br />
                  <span className="green-text"><strong>Technologies + Frameworks:</strong></span> Compass, Git, React.js, Android Studio, WordPress, Angular, Drupal
                  <br />
                  <span className="green-text"><strong>Design Software + Video Production: </strong></span>Adobe Photoshop, Illustrator, Premiere, Final Cut Pro
                  </p>
                </div>
            </div>
          </div>




            <ResumeRole
              roleTitle = "Front End Development Intern"
              company = "ICON Worldwide"
              location = "Zurich, Switzerland"
              summary = { <div>
              <p>June 2017 - September 2017</p>
                <ul>
                  <li><strong>Developed</strong> responsive websites from scratch 
                  using WordPress (HTML, SCSS, PHP, jQuery), Angular</li>
                  <li>
                    <strong>Built + styled</strong> elements and blocks of Drupal-based websites using HTML, SCSS + PHP
                  </li>
                  <li>
                    <strong>Collaborated</strong> closely with graphic designers to implement mobile-first designs of site wireframes
                  </li>

                </ul>
              </div>}
              />

          <ResumeRole
              roleTitle = "Graduate Assistant to the Computer Science Chair"
              company = "Pace University"
              location = "New York, NY"
              summary = { <div>
                <p>February 2017 – present</p>
                <ul>
                  <li><strong>Facilitated</strong> Android crash courses and Intro to 
                  Python course for undergraduates and graduate students</li>
                  <li>
                    <strong>Conducted</strong> research on mobile device literacy 
                    in developing markets, especially in Senegal
                  </li>
                  <li>
                    <strong>Designed</strong> posters/promotional materials in Photoshop for campus tech events
                  </li>
                </ul>

                <div className="assistant-prj hover-underline">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.slideshare.net/secret/Pv9D9eQDtnGoo">Intro to Python Presentation</a> 
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/vjrene/AndroidCrashCourse">Android Crash Course</a> 
                  <a target="_blank" rel="noopener noreferrer" href="https://www.slideshare.net/secret/4A3I7eP6NhothZ">Exploring Device Literacy in Senegal</a>
                </div>
              </div>}
              />



        {/* <div className="projects">
              <span className="res-heading">Projects</span>
              <div className="schools">
                <div>
                  blah blah blah
                </div>
            </div>
          </div> */}

          </div>

            <RelatedPages
            title1="Good Vibes"
            link1="good-vibes"

            title2="Discover More"
            link2="discover-more"

            title3="This Is: Vanessa Rene"
            link3="this-is" />

          </div>

        </div>
    );
  }
}
export default TopHits;
