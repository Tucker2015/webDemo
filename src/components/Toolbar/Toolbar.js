import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Help from "../../pages/Help";
import Login from "../../pages/Login";

const toolbar = (props) => (
  <header className="toolbar">
    <Router>
      <nav className="toolbar_navigation">
        {/* <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div> */}
        <div className="toolbar_logo">
          <a href="/">MixStream</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Live</a>
            </li>
            <li>
              <a href="/login">Login</a>
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
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </header>
);

export default toolbar;
