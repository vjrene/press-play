import React, { Component } from 'react';
import HomePageHeader from '../Partials/HomePageHeader';
import HomePageIcon from '../Partials/HomePageIcon';

class Home extends Component {
  render() {
    document.title = "Home | Spotify Internship Application";
    return(
        <div className="page-container home-container">

          <HomePageHeader
          title = "This Is: Vanessa Rene"
          summary = "Just a little about who you're going to hire."
          imageName = "this-is2.png" />

            <div className="home-made">
              <h1>Made for You</h1>
              <h2>See what this girl's about.</h2>

              <div className="hold-albums">

              <div id="ultimate">
                <HomePageIcon 
                 iconLink="ultimate-applicant"
                 title = "Ultimate Applicant"
                 summary = "Why you and Vanessa are
                 match made in front-end development heaven. If this 
                 were a more traditional application, it'd be her
                 cover letter."
                />
                </div>

            <div id="top-hits">
              <HomePageIcon 
                 iconLink="top-hits"
                 title = "Vanessa's Top Hits"
                 summary = "Take a look at what she's done. All the cool projects, she's
                 created and the cool places she's worked. Basically, her resume."
                />
              </div>

            <div id="good-vibes">
              <HomePageIcon 
                 iconLink="good-vibes"
                 title = "Good Vibes!"
                 summary = "Having good vibes about Vanessa's application? Wanna 
                 learn more about this project and how she built it? Look no more."
                />
            </div>

            <div id="discover">
              <HomePageIcon 
                 iconLink="discover-more"
                 title = "Discover More"
                 summary = "Peruse through Vanessa's latest projects. Read a little bit 
                 about her process and how she gets stuff done."
                />
            </div>


              </div>


            </div>
          
          </div>
    );
  }
}
export default Home;
