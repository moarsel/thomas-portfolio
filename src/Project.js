import React, { Component } from 'react';
import Grade from 'grade-js'
import './Project.css';

class Project extends Component {

  handleImageLoaded(){
    const gradientElement = this.refs.gradientWrap;
    Grade(gradientElement, '.previewImage')
  }


  render() {

    const divStyle = {
      height:'95vh',
      padding: '7rem 2rem',
      width:'100vw',
      position: 'relative'
    };

    const rotatedBackgroundStyle = { 
      position: 'absolute',
      height:'95vh',
      width:'110%',
      // backgroundColor: this.props.theme,
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
          <img className="video" onLoad={this.handleImageLoaded.bind(this)} className="previewImage" src={this.props.previewImage} width="50%" alt={"Preview screenshot of " + this.props.title} />
          <iframe 
            className="video"
            style={featureStyle} 
            src={this.props.movieSrc +"?color=ffffff&title=0&byline=0&portrait=0"} 
            width="80%" 
            height="90%" frameBorder="0" hidden>
          </iframe>
          <div className="project-blurb-container" style={featureStyle}>
            <div className="project-blurb">
              <div className="project-blurb-title">{this.props.title}</div>
              <div className="project-blurb-category">{this.props.category}</div>
            </div>
          </div>
          <div ref="gradientWrap" style={rotatedBackgroundStyle}>
            <img onLoad={this.handleImageLoaded.bind(this)} className="previewImage" src={this.props.previewImage} width="400" height="200" alt={"Preview screenshot of " + this.props.title} hidden />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
