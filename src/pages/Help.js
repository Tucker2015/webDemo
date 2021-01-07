import React, { Component } from "react";
import "./Help.css";
import logo from "./logo.svg";

class Help extends Component {
  render() {
    return (
      <div className="body_text">
        <h1>Help Page Test</h1>

        <img className="App-logo" src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Help;
