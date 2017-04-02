import smoothScroll from "smoothscroll-polyfill";
smoothScroll.polyfill();
import { SocialIcon } from "react-social-icons";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import content from "./content.json";

import Feature from "./Feature.js";

class App extends Component {
  constructor() {
    super();
    this.state = { activeFeature: -1 };
    this.featuredContent = content.content;
  }

  toggleActive(index) {
    this.setState({ activeFeature: index });
  }

  componentDidUpdate(prevProps, prevState) {
    let currentFeature = this.refs.activeFeature;
    let videoContainer = ReactDOM.findDOMNode(currentFeature);

    if (
      videoContainer && videoContainer.offsetTop && prevState !== this.state
    ) {
      window.scroll({
        top: videoContainer.offsetTop - 50,
        behavior: "smooth"
      });

      document.body.style.transition = "all 2s";
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
        <div className="App-header" />
        <div className="intro-container">
          <header className="card-intro">
            <div>
              <h2 className="card-name">Thomas Hoy</h2>
            </div>
          </header>
          <p className="card-byline">
            {content.tagline}
          </p>
          <div className="social-icons-container">
            <a
              href="mailto:thomashoycomposer@gmail.com?Subject=Lets%20chat"
              style={{
                color: "#FFF",
                fontSize: "22px",
                backgroundColor: "#000",
                margin: "0 1rem",
                textDecoration: "none",
                padding: "18px 25px"
              }}
            >
              Let's talk
            </a>

            <SocialIcon
              url="https://www.youtube.com/channel/UCzpKKyzHkFPtnDq58-x2qSA"
            />
            <SocialIcon url="https://soundcloud.com/thomas-hoy-composer/" />
          </div>
        </div>

        <div
          style={{
            margin: "0 auto",
            width: "60vw"
          }}
        >
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
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/176470392&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
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
