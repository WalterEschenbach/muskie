import React from "react";
import Products from "./products";
import Filter from "./filter";

import "./products.css";
import "./App.css";

export class Shop extends React.Component {
  render() {
    return (
      <div id="shopContainer">
        <Filter
          renderFish={this.props.renderFish}
          products={this.props.products}
        />
        <Products products={this.props.products} />
      </div>
    );
  }
}
