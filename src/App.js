import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import duncanPalmer from './images/duncan_palmer.png';
import takeStairs from './images/take-the-stairs.png';
import wantToHaveTo from './images/want-to-have-to.png';
// import Grade from 'grade-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="card-intro">
            <div>
            <h2 className="card-name">Thomas Hoy</h2>
              <p className="card-byline">I create music that create human life in a dishwasher. This song is an attempt to create human life in a dishwasher.</p>
            </div>
          </header>
        </div>
        <div className="slope-container">
          <Project theme="#005962" previewImage={duncanPalmer} title="Drawing Duncan Palmer" category="Short Film" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>
          <Project theme="#482935" previewImage={takeStairs} title="Take the Elevator" category="Experimental" movieSrc="https://player.vimeo.com/video/148242729"></Project>
          <Project theme="#fad49e" previewImage={wantToHaveTo} title="If you want to, you have to" category="Orchestra" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>
        </div>
          <p className="contact-me">
            Lets collaborate
          </p>
      </div>
    );
  }
}

export default App;
