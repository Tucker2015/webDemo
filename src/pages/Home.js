import React, { Component } from "react";
import logo from "./logo.svg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="body_text">
          <h1>Welcome to MixStream</h1>
          <p>Testing a new site</p>
          <div className="videoBox">
            <img className="logo" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
