import smoothScroll from "smoothscroll-polyfill";
smoothScroll.polyfill();
import { SocialIcon } from "react-social-icons";
import IMDB from "./images/imdb.svg";
import thomasCover from "./images/thomas-cover.jpg";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import content from "./content.json";

import Feature from "./Feature.js";

class App extends Component {
  constructor() {
    super();
    this.state = { activeFeature: -1, imageFade: false };
    this.featuredContent = content.content;
  }

  toggleActive(index) {
    this.setState({ activeFeature: index });
    const iframe = document.getElementsByTagName("iframe")[0];
    iframe.contentWindow.postMessage('{"method":"pause"}', "*");
  }

  componentDidMount() {}

  handleImageLoaded = () => {
    this.setState({ imageFade: true });
  };

  componentDidUpdate(prevProps, prevState) {
    let currentFeature = this.refs.activeFeature;
    let videoContainer = ReactDOM.findDOMNode(currentFeature);

    if (
      videoContainer &&
      videoContainer.offsetTop &&
      prevState !== this.state
    ) {
      window.scroll({
        top: videoContainer.offsetTop - 50,
        behavior: "smooth"
      });

      document.body.style.transition = "all 2s ease-out";
      document.body.style.backgroundColor = currentFeature.props.theme;
    }
  }

  renderFeature(feature, index) {
    const attrs = {
      key: index,
      theme: feature.theme,
      embed: feature.embed,
      title: feature.title,
      description: feature.description,
      category: feature.category
    };

    let active = this.state.activeFeature === index;

    if (active) {
      attrs.ref = "activeFeature";
    }
    return (
      <Feature
        {...attrs}
        activeFeature={active}
        toggleActive={this.toggleActive.bind(this, index)}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <div
          className="App-header"
          style={
            this.state.imageFade === false ? { opacity: 0 } : { opacity: 1 }
          }
        >
          <img
            hidden
            alt=""
            src={thomasCover}
            onLoad={this.handleImageLoaded}
          />
        </div>
        <div className="intro-container">
          <header className="card-intro">
            <div>
              <h2 className="card-name">Thomas Hoy</h2>
            </div>
          </header>
          <p className="card-byline">{content.tagline}</p>
          <div className="social-icons-container">
            <a
              href="mailto:thomashoycomposer@gmail.com?Subject=Lets%20chat"
              style={{
                color: "#000",
                fontSize: "22px",
                backgroundColor: "#FFF",
                margin: "0 1rem",
                textDecoration: "none",
                padding: "18px 14px",
                fontWeight: 900
              }}
            >
              Let's talk
            </a>

            <SocialIcon url="https://www.youtube.com/channel/UCzpKKyzHkFPtnDq58-x2qSA" />
            <SocialIcon url="https://soundcloud.com/thomas-hoy-composer/" />
            <a
              href="http://www.imdb.com/name/nm7779789/"
              style={{
                display: "inline-block",
                width: "50px",
                height: "50px",
                position: "relative",
                overflow: "visible",
                verticalAlign: "middle"
              }}
            >
              <img src={IMDB} width={54} alt="IMDB" />
            </a>
          </div>
        </div>

        <div className="soundcloud-container">
          <div
            style={{
              background: "#000",
              padding: 1
            }}
          >
            <h1 className="feature-title"> Recent Work </h1>
          </div>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/312877667&amp;color=%2300cc11&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
          />
        </div>
        {this.featuredContent.map((feature, index) => {
          return this.renderFeature(feature, index);
        })}
        <p className="contact-me" />
      </div>
    );
  }
}

export default App;
