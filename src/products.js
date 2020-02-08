import React from "react";
import "./products.css";
import "./App.css";

export default class Products extends React.Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="thumbnail" key={product.id}>
        <img src={product.image} alt={product.title} aria-hidden="true" />
        <p className="pName">{product.name}</p>
        <p>{product.description}</p>
        <button onClick={this.props.handleAddToCart}>Add to Cart</button>
      </div>
    ));
    return <div className="product-container">{productItems}</div>;
  }
}
