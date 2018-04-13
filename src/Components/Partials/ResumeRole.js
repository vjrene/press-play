import React, { Component } from 'react';

class ResumeRole extends Component {
  render(){
  return(
    <div className="resume-role-container">
      <div id="selector" className="role-title-container">
        <div className="play-stop">
          <span className="play"><i className="fa fa-play" aria-hidden="true"></i></span>
          <span className="stop"><i className="fa fa-stop" aria-hidden="true"></i></span>
        </div>

        <div className="role">
        <div className="role-title">{this.props.roleTitle}</div>
          <div className="role-location">{this.props.company} &bull; {this.props.location}</div>
        </div>
      </div>

    <div className="role-resp-cont">
        <div className="role-resp">
          {this.props.summary}
        </div>
    </div>
    </div>
  );
}
};

export default ResumeRole;
