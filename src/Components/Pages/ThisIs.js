import React, { Component } from 'react';
import HomePageHeader from '../Partials/HomePageHeader';
import MiniNav from '../Partials/MiniNav';
import RelatedPages from '../Partials/RelatedPages';
import { Link } from 'react-router-dom';
import Contact from '../Partials/Contact';

class ThisIs extends Component {
  render() {
    document.title = "This Is: Vanessa Rene | Spotify Internship Application";
    return(
        <div className="page-container thisis-container">
          <div className="thisis-header">
          <HomePageHeader
            title = "This Is: Vanessa Rene"
            summary = " "
            imageName = "this-is2.png" 
            />
          </div>

          <MiniNav
          link1="#overview"
          link1Name="Overview"
          
          link2="#about"
          link2Name="About Vanessa"
          
          link3="#contact"
          link3Name="Contact"
          />

          <div className="app-content--text">

          <div className="text">

            <h5 id="#overview">Overview</h5>
            <p>I am a Computer Science masters student set to graduate in December 2017. 
              My focus in school has been on web and mobile development. In addition 
              to developing my skills in HTML, CSS and vanilla JavaScript and PHP, I’ve
               also worked with the Angular and React frameworks, and am familiar with Drupal 
               and WordPress. I also have experience with building applications for the 
               Android platform.</p> 
              
              <p>Feel free to <Link to={'/top-hits'}>check out my resume</Link> to read in more depth about what 
                I’ve worked on. <Link to={'/discover-more'}>Discover More</Link> about other projects I’m working on as well!</p>
                 
           <h5 id="#about">About Vanessa</h5>
            <p>My journey to Computer Science hasn’t been as straightforward as 
              others who may have been coding since diapers, but I have always 
              had love for music and art. They have both been formative influences
               in my life: from voice classes at my beloved alma mater, LaGuardia High School, 
               to <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=SpzCSiOMA88">picking up</a> a few &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=66dC3gr2ADo">solos</a> during my tenure as a founding member of Macaulay Honors
                College’s a cappella group, The Macaulay Triplets.</p>

            <p>I decided to pursue Computer Science as a way to bridge the gap between art, music, and 
              (most recently explored and fleshed out), technology. These intersections are not parts of 
              my identity that must exist separately from each other. In fact, I feel as though it is 
              very possible for all three of them to work quite harmoniously.</p>

            <p>A small part of this desire to go for my Masters may have been fueled by some early 2000’s
               nostalgia for creating MySpace layouts for friends, designing wireframes in Photoshop, 
               and building iframe websites to host stories that I’d written in middle school. However, 
               I think one of the major proponents that pushed me forward was the exciting opportunity 
               to grow with technology that seems endless in the possibilities of implementation. 
               One thing I’ve learned along the journey is that the field calls for well rounded 
               innovators and creative minds, and I believe all my experiences have prepared me for
                this next phase in my career.</p>

          {/*<h5 id="#artist">Developer Features</h5>

           <pre>
            <code>{
"primary_stack" : "html, sass, javascript",
"secondary_stack" : "photoshop, illustrator, canon rebel t3i",
"dance_ability" : 0.546,
"energy" : 0.805,
"favorite_albums" : [ { 
	"album_name" : "Diary of Alicia Keys",
	"artist" : "Alicia Keys"
 }, { 
	"album_name" : "ctrl",
	"artist" : "SZA"
 }, { 
	"album_name" : "Coloring Book",
	"artist" : "Chance the Rapper"
 }, ],
"favorite_soundtrack" : ,
"favorite_spotify_playlists" : [ { 
	"name" : "Discover Weekly"
 }, { 
	"name" : "The Cookout",
 },
 { 
	"name" : "Dreamy Vibes",
 },
 ],
"favorite_custom_playlists" : [ {
	"name" : "please please please",
	"url" : "https://open.spotify.com/user/1247965666/playlist/0xjPoTxPOkWKG6sfnlP4R8"
 }, {
	"name" : "incenseburning",
	"url" : "https://open.spotify.com/user/1247965666/playlist/4gcbZLtKTnb8qWKLDm9Bj6"
 },  {
	"name" : "less than divided by three",
	"url" : "https://open.spotify.com/user/1247965666/playlist/7txYVTjXmknDbvmzkINHVG"
 }, ],
}/code>
          </pre> */}

          <Contact />
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
export default ThisIs;
