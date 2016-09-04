import React, { Component } from 'react';
import playButton from './images/play-button.svg';
import './Project.css';

class Project extends Component {



  render() {

    const divStyle = {
      height:'95vh',
      padding: '0rem 2rem 5rem 2rem',
      width:'100vw',
      position: 'relative'
    };

    const rotatedBackgroundStyle = { 
      position: 'absolute',
      height:'95vh',
      width:'110%',
      background: 'linear-gradient('+this.props.theme+', #333)',
      transform: 'rotateZ(-4deg) scale(1.2) translateY(-70vh)',
      transformOrigin: '50% 50%',
      zIndex: -1
    };

    const rotatedBackgroundStyleWithImage = { 
      position: 'absolute',
      height:'95vh',
      width:'110%',
      opacity: 0.08,
      background: 'url('+this.props.previewImage+')',
      backgroundSize: 'cover',
      transform: 'rotateZ(-4deg) scale(1.2) translateY(-70vh)',
      transformOrigin: '50% 50%',
      zIndex: -1
    };

    const featureStyle = {
      position: 'relative',
      zIndex: 2
    };


    return (
      <div className="Project">
        <div style={divStyle}>
          <img className="previewImage" src={this.props.previewImage} alt={"Preview screenshot of " + this.props.title} />
          <iframe 
            className="video"
            style={featureStyle} 
            src={this.props.movieSrc +"?color=ffffff&title=0&byline=0&portrait=0"} 
            width="80%" 
            height="90%" frameBorder="0" hidden>
          </iframe>
          <div className="project-blurb-container" style={featureStyle}>
            <div className="project-blurb">
              <img className="play-button" src={playButton} alt="play button"/>
              <div className="project-blurb-text">
                <div className="project-blurb-title">{this.props.title}</div>
                <div className="project-blurb-category">{this.props.category}</div>
              </div>
            </div>
          </div>
          <div style={rotatedBackgroundStyle}>
          </div>
          <div style={rotatedBackgroundStyleWithImage}>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
