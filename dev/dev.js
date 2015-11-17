import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BodyStyle from '../src/BodyStyle';

document.title = 'React Avatr Dev';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

/*
var script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);
*/

document.body.innerHTML = `
  <div id="dev"></div>
  <script src="/.js"></script>
`;

class Dev extends Component {
  render() {
    return (
      <div>
        <BodyStyle style={{backgroundColor: '#FFCC00'}} className="yourComponentClass" />
      </div>
    );
  }
}

ReactDOM.render(<Dev/>, document.getElementById('dev'));
