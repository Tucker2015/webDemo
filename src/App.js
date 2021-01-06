import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Help from "./pages/Help";

import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <Help />
      </div>
    );
  }
}

export default App;
