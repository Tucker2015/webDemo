import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Help from "../../pages/Help";

const toolbar = (props) => (
  <header className="toolbar">
    <Router>
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
              <a href="/help">Help</a>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
      </Switch>
    </Router>
  </header>
);

export default toolbar;
