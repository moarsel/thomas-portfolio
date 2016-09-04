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
          <Project theme="#7db585" previewImage={duncanPalmer} title="The first one" category="Opera" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>
          <Project theme="#000AAA" previewImage={takeStairs} title="One upon a time" movieSrc="https://player.vimeo.com/video/148242729"></Project>
          <Project theme="#7db585" previewImage={wantToHaveTo} title="The first one" category="Rock" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>
        </div>
          <p className="contact-me">
            Lets collaborate
          </p>
      </div>
    );
  }
}

export default App;
