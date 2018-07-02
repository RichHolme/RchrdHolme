import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Bio from "./Components/Bio";
import Profile from "./Components/Profile"

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         <Bio />
       </div>
      </div>
    );
  }
}

export default App;
