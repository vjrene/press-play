import React, { Component } from 'react';
import SubPageHeader from '../Partials/SubPageHeader';
import RelatedPages from '../Partials/RelatedPages';
// import MiniNav from '../Partials/MiniNav';
import { Link } from 'react-router-dom';
import Contact from '../Partials/Contact';

class UltimateApp extends Component {
  render() {
    document.title = "Ultimate Applicant | Spotify Internship Application";
    return(
        <div className="page-container ultimate-container">

    <div id="ultimate">
          <SubPageHeader
            subtitle="Cover Letter"
            mainTitle="Ultimate Applicant"
            summary="What Vanessa can do for you. Why you're a 
            match made in web development heaven. If this were a more traditional type of application, it'd be her cover letter."
            link="http://www.vanessography.com/assets/Vanessa-Rene_resume-spotify-web.pdf"
            linkName="Resume PDF" />
    </div>

      {/* <MiniNav
          link1Id="why-vanessa"
          link1="#"
          link1Name="Why Vanessa?"
          
          link2Id = "why-spotify"
          link2="#"
          link2Name="Why Spotify?"
          
          link3Id = "contact"
          link3="#"
          link3Name="Contact"
          /> */}

<div className="app-content--text">

          <div className="text">

          <div id="why-vanessa" className="sub-page-active">
            <h5>Why Vanessa?</h5>
            <p>Music inspires me. Sketching, designing, and building web applications is how 
            I’ve been able to express that inspiration in a visual medium. My love for learning 
            and challenging myself is the glue that holds everything together, and keeps me pushing 
            forward to becoming a better developer.
            </p>

            <p>

            In building up my expertise as a developer, I’ve had the opportunity to try managing different roles. 
            For example, in building this application, I took on the role of designer and developer from the 
            project’s inception. Feel free to read more about my process <Link to={'/good-vibes'}>here</Link>.
            </p>

            <p>
              As an intern at ICON Worldwide during summer 2017, I collaborated closely with other developers and 
              designers to build responsive websites primarily using Drupal and WordPress. One of my favorite 
              projects I worked on during my time there was Iron Deficiency Day (site is live &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="http://www.irondeficiencyday.com/">here</a>!). I implemented 
              a wireframe using Angular for the front end, and also leveraged Node.js to handle API calls to Twitter 
              to display tweets. I’m also happy to say that I will be returning back to ICON (from January to April) 
              for a second front end development internship this winter.
            </p>

            </div>

            <div id="why-spotify" className="sub-page">

            <h5>Why Spotify?</h5>
            <p>The front end development internship opportunity at Spotify interested me 
              for multiple reasons. Obviously, Spotify is already something I use almost 
              every single day, often for hours at a time, and in many ways, it is easy 
              to see how how the company has ultimately innovated how we listen to and 
              consume music. Spotify isn’t just a streaming service either, but an immense 
              source of data of participants’ listening habits and statistics of artists.</p>

              <p>One of my favorite Spotify-branded projects has been the end of the 
                year analysis of users’ listening habits: <a target="_blank" rel="noopener noreferrer" href="http://2017wrapped.com/">2017wrapped</a>. Not only is
                 the project visually interesting, but it makes use of the data gathered 
                 and presents it in a way that gets people very excited about the product. 
                 As an intern at Spotify, I want to work on projects that are not only 
                 visually stimulating, but ones that also work with data in engaging 
                 and interactive ways.</p>

                 </div>
                 
                 <Contact />

          </div>


            <RelatedPages
            title1="Top Hits"
            link1="top-hits"

            title2="Discover More"
            link2="discover-more"

            title3="This Is: Vanessa Rene"
            link3="this-is" />

            </div>

          </div>
    );
  }
}
export default UltimateApp;
