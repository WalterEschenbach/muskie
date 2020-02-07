/* You need a way to write code that says, “Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.” You can do this by wrapping your code in curly braces. */

//React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.

import React from "react";
import "./App.css";
import "./Mobile/SideDrawer/SideDrawer.css";
import "./Mobile/Mobile.css";
import "./Mobile/SideDrawer/BurgerButton.css";
import "./products.css";
import { NavBar } from "./nav";
import { Shop } from "./shop";
import { Foot } from "./foot";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Shop />
        <Foot />
      </div>
    );
  }
}

export default App;
