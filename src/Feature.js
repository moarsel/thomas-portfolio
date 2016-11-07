import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {

  constructor() {
    super();
    this.state = {isOpen: false};
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

    let projectVideo = this.refs.projectVideo;
    projectVideo.volume = 0;
    projectVideo.controls = false;
  };

  handleScroll(e) {
    let projectVideo = this.refs.projectVideo;
    let featureBlurbRectangle = this.refs.featureBlurb.getBoundingClientRect();
    let isVisible = (featureBlurbRectangle.top < window.innerHeight) && (featureBlurbRectangle.bottom > 0);

    if (isVisible) {
      projectVideo.play();
    } else if (!isVisible){
      this.setState({isOpen: false})
      projectVideo.pause();
      projectVideo.volume = 0;
      projectVideo.controls = false;
    }
  };

  handleClick(e){
    this.openFeature();
  }

  openFeature(){
    let projectVideo = this.refs.projectVideo;
    
    this.setState({isOpen: true});
    projectVideo.pause();
    projectVideo.volume = 1;
    projectVideo.controls = true;
    projectVideo.play();
    projectVideo.currentTime = 0;
  }

  closeFeature(){

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {

 
    let activeClass = this.state.isOpen ? 'projectOpen' : 'projectClosed';


    return (
      <div className={activeClass}>
        <div ref="featureBlurb" className="featureContainer">
          <video ref="projectVideo" className="videoElement" onClick={this.handleClick} onCanPlay={this.videoCanPlay} src={this.props.video} poster={this.props.previewImage}>
            Sorry, your browser doesn't support embedded videos, 
            but don't worry, you can <a href={this.props.video} download>download it</a>
            and watch it with your favorite video player!
          </video>
          <div className="feature" onClick={this.handleClick}>
            <div className="feature-text">
              <div className="feature-title">{this.props.title}</div>
              <div className="feature-category">{this.props.category}</div>
            </div>
            <div className="feature-description">
            {this.props.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
