import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">MixStream</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="http://live.kevtucker.com:3333">Live</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="./src/pages/Home.js">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
