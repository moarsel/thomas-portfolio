import React, { Component } from 'react';
import YouTube from 'react-youtube';
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

    // let projectVideo = this.refs.projectVideo;
    // projectVideo.volume = 0;
    // projectVideo.controls = false;
  };

  handleScroll(e) {
    let projectVideo = this.refs.projectVideo.internalPlayer;
    let featureBounds = this.refs.featureBlurb.getBoundingClientRect();
    let isVisible = (featureBounds.top + 200 < window.innerHeight) && (featureBounds.bottom - 540 > 0);
    let featureCenter = featureBounds.top - featureBounds.top / 2;
    featureCenter *= Math.sign(featureCenter);
    featureCenter = 1 - featureCenter / 150;
    // projectVideo.style.transform = "translateY: #{22+ featureCenter}px";
    // console.log(featureCenter, `HSLA(20,20,#{featureCenter}, 1)`);
    // console.log(`HSLA(20,20,${featureCenter * 100}, 1)`);

    if (featureCenter > 0) {
      // console.log(`RGBA(22,33, ${featureCenter * 100}, 1)`);
      // document.body.style.backgroundColor = `HSLA(222,${featureCenter * 10}, 100, 1)`;
    }
    


    // Math.floor(Math.abs(x));

    // cool effect
    // projectVideo.currentTime = featureCenter * 10;


    


    if (isVisible && !this.state.isOpen) {
      projectVideo.playVideo();
    } else if (!isVisible && !this.state.isOpen){
      this.closeFeature();
    }
  };

  handleClick(e){
    this.openFeature();
  }

  openFeature(){
    let projectVideo = this.refs.projectVideo.internalPlayer;
    let videoContainer = this.refs.videoContainer;
    
    this.setState({isOpen: true});
    projectVideo.seekTo(0);
    projectVideo.unMute();
    projectVideo.setOption("controls", 1);

    projectVideo.playVideo();
    console.log(videoContainer, videoContainer.offsetTop)

    window.scroll({
      top: videoContainer.offsetTop - 25,
      behavior: 'smooth'
    });

    setTimeout(function(){
      // projectVideo.controls = true;
    }, 1200);
  }

  closeFeature(){
      let projectVideo = this.refs.projectVideo.internalPlayer;


      // this.setState({isOpen: false})
      // projectVideo.pause();
      projectVideo.volume = 0;
      projectVideo.controls = false;

      // maintain scroll position on close...
      // var tempScrollTop = window.scrollY;
      // setTimeout(function(){
      //   window.scrollTo(tempScrollTop, 0);
      // }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  onReady(event) {
    let video = event.target;
    video.playVideo();
    video.mute();
    video.controls = false;
  }

  render() {

 
    let activeClass = this.state.isOpen ? 'projectOpen' : 'projectClosed';
    const videoOpts = {
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: this.state.isOpen ? 1 : 0,
        showinfo: 0,
        rel:0,
        modestbranding: 1
      }
    }


    return (
      <div className={activeClass}>
        <div ref="featureBlurb" className="featureContainer">
          
          
          <div className="videoElement" ref="videoContainer">
            <YouTube
            ref="projectVideo"
            videoId={this.props.video}
            opts={videoOpts}
            onReady={this.onReady}
            />
          </div>


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
