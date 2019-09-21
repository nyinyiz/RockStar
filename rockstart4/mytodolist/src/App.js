import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div class="card">
          <img src={logo} className="App-logo" alt="logo" />
          <h4><b>Nyi Nyi</b></h4>
          <p>Developer</p>
      </div>
    )
  }
}

export default App;
