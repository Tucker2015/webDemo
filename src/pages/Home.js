import React, { Component } from "react";
import logo from "./logo.svg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="body_text">
          <h1>Welcome to MixStream</h1>
          <img className="App-logo" src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Home;
