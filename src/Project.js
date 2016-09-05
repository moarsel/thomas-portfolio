import React, { Component } from 'react';
import playButton from './images/play-button.svg';
import wantTo from './videos/ifyouwantto.mp4';
import './Project.css';

class Project extends Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {shouldPlay: 0}
  };

  handleScroll(e) {
    let projectVideo = this.refs.projectVideo;
    let projectBlurbRectangle = this.refs.projectBlurb.getBoundingClientRect();
    let isVisible = (projectBlurbRectangle.top < window.innerHeight) && (projectBlurbRectangle.bottom > 0);
    // isVisible = elementTop < window.innerHeight && elementBottom >= 0

    if (isVisible) {
      console.log(this.props.title, 'visible now')
      projectVideo.play();
    } else {
      console.log(this.props.title, 'not visible now')
      projectVideo.pause();
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

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
        <div ref="projectBlurb" style={divStyle}>
          <video ref="projectVideo" className="previewImage" onCanPlay={this.videoCanPlay} src={wantTo} poster={this.props.previewImage}>
            Sorry, your browser doesn't support embedded videos, 
            but don't worry, you can <a href={wantTo}>download it</a>
            and watch it with your favorite video player!
          </video>
          <div  className="project-blurb-container" style={featureStyle}>
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
