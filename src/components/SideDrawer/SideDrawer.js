import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="http://live.kevtucker.com:3333">Live</a>
      </li>
      <li>
        <a href="/">Login</a>
      </li>
      <li>
        <a href="/">Help</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
