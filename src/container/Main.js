import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World!</h1>
        </header>
        <p className="App-intro">
          <code>Deployed Web using heroku!</code>
        </p>
      </div>
    );
  }
}

export default Main;
