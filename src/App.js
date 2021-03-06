import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Profile from "./Components/Profile";
// import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const styles = {
  div: {
    overflow: "hidden",
    // background: "#f2f2f2"
    // height: "100%",
    // // backgroundImage: "url('https://cdn.wallpapersafari.com/94/90/NbHSGU.jpg')",
    // bottom: "0",
    // position: "fixed",
    // right: "0",
    // width: "100%",
    // textAlign: "center"
  }

}

class App extends Component {
  render() {
    return (
      // <div style={styles.div} className="App">
    
      //    <Profile />
      //    {/* <Education /> */}
      //    {/* <Projects /> */}
      //    <button className="btn btn-gray">My Work</button>
      //    <Footer />
       
      // </div>
      <Router>
        <div>
          {/* <Header user={this.state.user} /> */}
          <Route exact path="/" component={Projects} />
          <Route exact path="/Profile" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
