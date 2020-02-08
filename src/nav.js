import React from "react";
import "./Mobile/SideDrawer/BurgerButton.css";
import "./Mobile/SideDrawer/SideDrawer.css";
import BurgerButton from "./Mobile/SideDrawer/BurgerButton";
import { MobileSideDrawer } from "./Mobile/SideDrawer/SideDrawer";
import SearchBar from "./SearchBar";

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navContainer">
          <div id="logo">
            <img
              src={require("./img/muskellunge.svg")}
              alt=""
              onClick={this.props.homeRender}
            />
          </div>
          <div id="mainTitle">
            <h1>MuskieMart</h1>
          </div>
          <div id="search">
            <SearchBar
              onChangeSearchHandler={this.props.onChangeSearchHandler}
            />
          </div>
          <div id="account">AccountLink</div>
          <div id="cartIcon">
            <a href="./cart.html">
              <img src={require("./img/cart.svg")} alt="" />
            </a>{" "}
          </div>
          <BurgerButton />
        </div>
        <MobileSideDrawer />
      </div>
    );
  }
}
