import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Feature.css";

class Feature extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { volume: 0 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.refs.projectVideo.player.setVolume(0);
  }

  handleScroll(e) {
    // let projectVideo = this.refs.projectVideo.internalPlayer;
    let featureBounds = this.refs.featureBlurb.getBoundingClientRect();
    // let isVisible = (featureBounds.top + 200 < window.innerHeight) && (featureBounds.bottom - 540 > 0);
    let featureCenter = featureBounds.top - featureBounds.top / 2;
    featureCenter *= Math.sign(featureCenter);
    featureCenter = 1 - featureCenter / 150;

    if (featureCenter > 0) {
      // console.log(`RGBA(22,33, ${featureCenter * 100}, 1)`);
      // document.body.style.backgroundColor = `HSLA(222,${featureCenter * 10}, 100, 1)`;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    // because react-player thing is a lil buggy
    if (prevProps.activeFeature !== this.props.activeFeature) {
      // volume must be state not inherited props
      const volume = this.props.activeFeature ? 1 : 0;
      
      this.setState({ volume: volume });
      this.refs.projectVideo.player.seekTo(0);
      this.refs.projectVideo.player.setVolume(volume);
    }
  }

  render() {
    let activeClass = this.props.activeFeature
      ? "projectOpen"
      : "projectClosed";

    let videoOpts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        showinfo: 0,
        rel: 0,
        modestbranding: 1
      }
    };

    const soundcloudOpts = {
      showArtwork: false
    };

    return (
      <section className={activeClass}>
        <div
          ref="featureBlurb"
          className="featureContainer"
          onClick={this.props.toggleActive}
        >
          <div className="videoElement" ref="videoContainer">
            <ReactPlayer
              url={this.props.embed}
              ref="projectVideo"
              playing={this.props.activeFeature}
              controls={true}
              volume={this.state.volume}
              youtubeConfig={videoOpts}
              soundcloudConfig={soundcloudOpts}
              width="100%"
              height="100%"
            />
          </div>

          <div className="feature">
            <div className="feature-text">
              <div className="feature-category">{this.props.category}</div>
              <div className="feature-title">{this.props.title}</div>
            </div>
            {this.props.activeFeature
              ? <div className="feature-description">
                  {this.props.description}
                </div>
              : ""}
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
