import React, { Component } from "react";
import logo from "./logo.png";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="body_text">
          <h1>Test deployment to Netlify</h1>
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Home;
