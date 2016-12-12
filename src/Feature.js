import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './Feature.css';

class Feature extends Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

    // let projectVideo = this.refs.projectVideo;
    // projectVideo.volume = 0;
    // projectVideo.controls = false;
  }

  handleScroll(e) {
    // let projectVideo = this.refs.projectVideo.internalPlayer;
    let featureBounds = this.refs.featureBlurb.getBoundingClientRect();
    let isVisible = (featureBounds.top + 200 < window.innerHeight) && (featureBounds.bottom - 540 > 0);
    let featureCenter = featureBounds.top - featureBounds.top / 2;
    featureCenter *= Math.sign(featureCenter);
    featureCenter = 1 - featureCenter / 150;
    // projectVideo.style.transform = "translateY: #{22+ featureCenter}px";

    if (featureCenter > 0) {
      // console.log(`RGBA(22,33, ${featureCenter * 100}, 1)`);
      // document.body.style.backgroundColor = `HSLA(222,${featureCenter * 10}, 100, 1)`;
    }

    if (isVisible && !this.props.activeFeature) {
      // projectVideo.playVideo();
    } else if (!isVisible && !this.props.activeFeature){
      this.closeFeature();
    }
  }

  closeFeature(){
      // let projectVideo = this.refs.projectVideo.internalPlayer;


      // this.setState({isOpen: false})
      // projectVideo.pause();
      // projectVideo.mute();
      // projectVideo.setOption("controls", 0);

      // maintain scroll position on close...
      // var tempScrollTop = window.scrollY;
      // setTimeout(function(){
      //   window.scrollTo(tempScrollTop, 0);
      // }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
 
    let activeClass = this.props.activeFeature ? 'projectOpen' : 'projectClosed';
    const videoOpts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: this.props.activeFeature ? 1 : 0,
        showinfo: 0,
        rel:0,
        modestbranding: 1,
        videoId: this.props.video
      }
    }


    return (
      <section className={activeClass}>
        <div ref="featureBlurb" className="featureContainer">
          <div>{this.props.activeFeature}</div>
          <div className="videoElement" ref="videoContainer">
            <ReactPlayer
              url={this.props.video}
              ref="projectVideo"
              playing={this.props.activeFeature}
              youtubeConfig={videoOpts}
              width="100%"
              height="60vh"/>
          </div>


          <div className="feature" onClick={this.props.toggleActive}>
            <div className="feature-text">
              <div className="feature-title">{this.props.title}</div>
              <div className="feature-category">{this.props.category}</div>
            </div>
            <div className="feature-description">
              {this.props.description}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
