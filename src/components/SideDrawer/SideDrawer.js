import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./SideDrawer.css";
import Help from "../../pages/Help";

const sideDrawer = (props) => (
  <Router>
    <nav className="side-drawer">
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
    </nav>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/help" component={Help} />
    </Switch>
  </Router>
);

export default sideDrawer;
