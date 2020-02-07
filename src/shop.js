import React from "react";
import Products from "./products";
import Filter from "./filter";

import "./products.css";
import "./App.css";

let productArray;

export class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };

    this.renderFish = this.renderFish.bind(this);
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

  render() {
    return (
      <div id="shopContainer">
        <Filter renderFish={this.renderFish} products={this.state.products} />
        <Products
          products={this.state.products}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
