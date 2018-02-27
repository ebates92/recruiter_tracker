import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import Routes from './routes'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
          <Routes />
      </React.Fragment>
    );
  }
}

export default App;
