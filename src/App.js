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

let productArray;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false, products: [] };

    this.renderFish = this.renderFish.bind(this);
    this.homeRender = this.homeRender.bind(this);
    this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
  }

  async componentDidMount() {
    await fetch("http://localhost:8000/products/")
      //convert the results to json below
      .then(response => response.json())
      .then(data => this.setState({ products: data }));

    productArray = this.state.products;
  }

  renderFish(pType) {
    let newArray = [];
    productArray.forEach(product => {
      if (product.type === pType) {
        newArray.push(product);
      }
    });

    this.setState({ products: newArray });
  }
  homeRender() {
    this.setState({ products: productArray });
  }

  onChangeSearchHandler() {
    var x = document.getElementById("fname");
    x.value = x.value.toLowerCase();
    switch (x.value) {
      case "rod":
        this.renderFish("Rod");
        break;
      case "reel":
        this.renderFish("Reel");
        break;
      case "gear":
        this.renderFish("Gear");
        break;
      case "lure":
        this.renderFish("Lure");
        break;
      default:
        this.homeRender();
        break;
    }
  }

  render() {
    return (
      <div>
        <NavBar
          homeRender={this.homeRender}
          onChangeSearchHandler={this.onChangeSearchHandler}
          products={this.state.products}
        />
        <Shop renderFish={this.renderFish} products={this.state.products} />
        <Foot />
      </div>
    );
  }
}

export default App;
