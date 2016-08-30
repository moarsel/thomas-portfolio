import React, { Component } from 'react';


class Project extends Component {



  render() {

    var divStyle = {
      backgroundColor: this.props.theme,
      padding: '5rem',
      height:'25vh',
      width:'100vw'
    };
    
    return (
      <div className="Project">
        <div style={divStyle}>
          <div>{this.props.title}</div>
        </div>

      </div>
    );
  }
}

export default Project;
