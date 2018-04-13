import React, { Component } from 'react';
import SubPageHeader from '../Partials/SubPageHeader';
import RelatedPages from '../Partials/RelatedPages';
// import Icon from '../Partials/Icon';
import HomePageIcon from '../Partials/HomePageIcon';

class DiscoverMore extends Component {
  render() {
    document.title = "Discover More from Vanessa Rene | Spotify Internship Application";
    return(
        <div className="page-container discover-container">

        <div id="discover">
          <SubPageHeader
            subtitle="Projects"
            mainTitle="Discover More"
            summary="Peruse through Vanessa's latest projects. 
            Read a little bit about her process and how she gets stuff done."
            link="https://github.com/vjrene/"
            linkName="github: @vjrene" />
          </div>

          <div className="app-content--text">
          
          <div className="text">

          <div className="hold-albums">
          <div id="vanessography">
              <HomePageIcon 
                 iconLink="projects/vanessography"
                 title = "vanessography"
                 summary = "Vanessa's photography, development &amp; design portfolio."
                />
            </div>

          <div id="idday">
            <HomePageIcon 
                iconLink="projects/idday"
                title = "Iron Deficiency Day"
                summary = "A website built to encourage awareness about 
                iron deficiency and iron deficiency anemia."
              />
          </div>

          <div id="erongo">
            <HomePageIcon 
                iconLink="projects/erongo"
                title = "Erongo"
                summary = "A WordPress store selling men’s + women’s 
                wallets/purses and home decor."
              />
          </div>
            
          </div>
          </div>

            <RelatedPages
            title1="Ultimate Applicant"
            link1="ultimate-applicant"

            title2="Top Hits"
            link2="top-hits"

            title3="This Is: Vanessa Rene"
            link3="this-is" />
          
          </div>

        </div>
    );
  }
}
export default DiscoverMore;
