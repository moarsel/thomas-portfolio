import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import playButton from './images/play-button.svg';
import './Project.css';

class Project extends Component {

  constructor() {
    super();
    this.state = {isOpen: false};
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.showPlayButton = true;
  };

  componentDidMount(){

    window.addEventListener('scroll', this.handleScroll);

    let projectVideo = this.refs.projectVideo;
    projectVideo.volume = 0;
  };

  handleScroll(e) {
    let projectVideo = this.refs.projectVideo;
    let projectBlurbRectangle = this.refs.projectBlurb.getBoundingClientRect();
    let isVisible = (projectBlurbRectangle.top < window.innerHeight) && (projectBlurbRectangle.bottom > 0);

    if (isVisible) {
      projectVideo.play();
    } else if (!isVisible){
      this.setState({isOpen: false})
      projectVideo.pause();
    }
  };

  handleClick(e){
    let projectVideo = this.refs.projectVideo;
    
    this.setState({isOpen: true});

    projectVideo.pause();
    projectVideo.volume = 1;
    projectVideo.play();
    projectVideo.currentTime = 0;
  }

  handleHover(e){
    console.log(e.type);
    if (e.type === 'mouseover') {
      console.log('on')
      this.showPlayButton = true;
    } else {
      console.log('off')
      this.showPlayButton = false;
    }
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {

 
    let activeClass = this.state.isOpen ? 'projectOpen' : 'projectClosed';

    const backgroundPosition = {
      position: 'absolute',
      height:'95vh',
      minHeight: '30rem',
      maxHeight: '50rem',
      width:'110%',
      zIndex: -1,
      transform: 'rotateZ(-4deg) scale(1.2) translateY(-70vh)',
      transformOrigin: '50% 50%',
    }

    const rotatedBackgroundStyleWithImage = { 
      ...backgroundPosition,
      // opacity: 0.25,
      background: 'url('+this.props.previewImage+')',
      backgroundSize: 'cover',
      backgroundColor: this.props.theme,
      backgroundBlendMode: 'saturation'
    };




    return (
      <div className={activeClass}>
        <div ref="projectBlurb" className="projectContainer">
          <video ref="projectVideo" className="videoElement" onClick={this.handleClick} onCanPlay={this.videoCanPlay} src={this.props.video} poster={this.props.previewImage}>
            Sorry, your browser doesn't support embedded videos, 
            but don't worry, you can <a href={this.props.video}>download it</a>
            and watch it with your favorite video player!
          </video>
          <div className="project-blurb-container">
            <div className="project-blurb" onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
              <img className="play-button" src={playButton} alt="play button" hidden={this.showPlayButton}/>
              <div className="project-blurb-text">
                <div className="project-blurb-title">{this.props.title}</div>
                <div className="project-blurb-category">{this.props.category}</div>
              </div>
            </div>
              <div className="description">
              {this.props.title} {this.props.title} {this.props.title} 
              {this.props.title} {this.props.title} {this.props.title}
              {this.props.title} {this.props.title} {this.props.title} 
              {this.props.title} {this.props.title} {this.props.title}
            </div>
          </div>
          
          <div style={rotatedBackgroundStyleWithImage}>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
