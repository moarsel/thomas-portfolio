import smoothScroll from 'smoothscroll-polyfill';
smoothScroll.polyfill();

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Feature from './Feature.js';

class App extends Component {
  constructor(){
    super();
    this.state = {activeFeature: -1};
    
    this.featuredContent = [
      {
        theme:"#0e2300",
        video:"https://www.youtube.com/watch?v=JfmyXwpFLbc",
        title:"Drawing Duncan Palmer",
        category:"Short Film",
        description: `Putent nostrud ut quo. Ignota pertinacia ex usu, ad elit interpretaris 
        vim. Ei ius tation labore, vis ea senserit reprimique appellantur. Cum te iuvaret 
        corrumpit maiestatis, ad vis erat epicurei oportere. Cu vel officiis consequuntur, no
        simul nominavi prodesset vis, id his nibh aeterno. Eum ad pertinax constituam, sed ubique 
        scripta signiferumque ei, adhuc tation facilisis an nec.` 
      },
      {
        theme:"#0e2300",
        video:"https://www.youtube.com/watch?v=wVjGmzqW4Lg",
        title:"If you want to, you have to",
        category:"Orchestra",
        description: `Putent nostrud ut quo. Munere abhorreant usu te, ex per delenit delectus
        salutatus, summo simul sea an. Ignota pertinacia ex usu, ad elit interpretaris vim. 
        Ei ius tation labore, vis ea senserit reprimique appellantur. Cum te iuvaret corrumpit 
        maiestatis, ad vis erat epicurei oportere. Cu vel officiis consequuntur, no simul 
        nominavi prodesset vis, id his nibh aeterno. Eum ad pertinax constituam, sed ubique 
        scripta signiferumque ei, adhuc tation facilisis an nec.` 
      }
    ]
  }

  toggleActive(index){
    this.setState({activeFeature: index});
  }

  componentDidUpdate(prevProps, prevState) {
    let videoContainer = ReactDOM.findDOMNode(this.refs.activeFeature);
    if(videoContainer && videoContainer.offsetTop && prevState !== this.state) {
      window.scroll({
        top: videoContainer.offsetTop - 25,
        behavior: 'smooth'
      });
    }    
  }

  renderFeature(feature, index){
    const attrs = {
      key: index,
      theme: feature.theme,
      video: feature.video,
      title: feature.title,
      description: feature.description
    }

    let active = this.state.activeFeature === index;

    if(active) {
      attrs.ref = "activeFeature";
    }
    return (<Feature {...attrs} activeFeature={active} toggleActive={this.toggleActive.bind(this, index)}/>)
  }

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
        {
          this.featuredContent.map(
            (feature, index) => {
              return this.renderFeature(feature, index);
            }
          )
        }
        <p className="contact-me">
          
        </p>
      </div>
    );
  }
}

export default App;
