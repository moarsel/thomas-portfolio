import smoothScroll from 'smoothscroll-polyfill';
smoothScroll.polyfill();

import React, { Component } from 'react';
import './App.css';
// import Project from './Project.js';
import Feature from './Feature.js';

// import wantToVideo from './videos/ifyouwantto.mp4';
// import duncanPalmerVideo from './videos/drawing-duncan.mp4';
// import takeTheStairsVideo from './videos/take-the-elevator.mp4';

// import duncanPalmer from './images/duncan_palmer.png';
// import wantToHaveTo from './images/want-to-have-to.png';
// import takeStairs from './images/take-the-stairs.png';

// <Project theme="#0e2300" previewImage={duncanPalmer} video={duncanPalmerVideo} title="Drawing Duncan Palmer" category="Short Film" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>
// <Project theme="#482935" previewImage={takeStairs} video={takeTheStairsVideo} title="Take the Elevator" category="Experimental" movieSrc="https://player.vimeo.com/video/148242729"></Project>
// <Project theme="#fad49e" previewImage={wantToHaveTo} video={wantToVideo} title="If you want to, you have to" category="Orchestra" description="yep yep yep"  movieSrc="https://player.vimeo.com/video/148242729"></Project>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="card-intro">
            <div>
            <h2 className="card-name">Thomas Hoy</h2>
            </div>
          </header>
        </div>
        <p className="card-byline">
          Lorem ipsum dolor sit amet, an vidit omittam vulputate ius. Velit denique accumsan ei qui, utinam admodum omnesque ne eum, an mel aperiam labores mandamus. Purto quidam cu sit, ex eam quando primis interesset.
        </p>
        <Feature theme="#0e2300" video={"JfmyXwpFLbc"} title="Drawing Duncan Palmer" category="Short Film" description="Putent nostrud ut quo. Ignota pertinacia ex usu, ad elit interpretaris vim. Ei ius tation labore, vis ea senserit reprimique appellantur. Cum te iuvaret corrumpit maiestatis, ad vis erat epicurei oportere. Cu vel officiis consequuntur, no simul nominavi prodesset vis, id his nibh aeterno. Eum ad pertinax constituam, sed ubique scripta signiferumque ei, adhuc tation facilisis an nec."  movieSrc="https://player.vimeo.com/video/148242729"></Feature>
        <Feature theme="#0e2300" video={"wVjGmzqW4Lg"} title="If you want to, you have to" category="Orchestra" description="Ex velit augue voluptua quo, vel modus fuisset ea. Eirmod eripuit molestiae ea duo, duo praesent salutandi scriptorem cu. Lorem omittam repudiandae mea ut, ea sale reque eos. Munere abhorreant usu te, ex per delenit delectus salutatus, summo simul sea an. Fabulas atomorum scriptorem sea ei, stet quando aperiam nam no, congue iriure cum ad."  movieSrc="https://player.vimeo.com/video/148242729"></Feature>
        <p className="contact-me">
          
        </p>
      </div>
    );
  }
}

export default App;
