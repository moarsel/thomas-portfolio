import React, { Component } from 'react';
import './Project.css';

class Project extends Component {



  render() {

    var divStyle = {
      backgroundColor: this.props.theme,
      height:'65vh',
      padding: '40px',
      width:'100vw'
    };

    var videoStyle = {
     
    }
    
    return (
      <div className="Project">
        <div style={divStyle}>
          <iframe 
            style={videoStyle} 
            src={this.props.movieSrc +"?color=ffffff&title=0&byline=0&portrait=0"} 
            width="80%" 
            height="90%" frameBorder="0">
          </iframe>
          <div className="project-blurb-container">
            <div className="project-blurb">

              <div className="project-blurb-title">{this.props.title}</div>
              <div className="project-blurb-category">{this.props.category}</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Project;
