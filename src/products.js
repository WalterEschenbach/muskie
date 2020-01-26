import React from 'react';
import './products.css';
import './App.css';

export default class Products extends React.Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div className="product-container" key={product.id} rel="">
                <div className="thumbnail">
                    <a href={`#${product.type}`} onClick={this.props.handleAddToCart} rel="" aria-hidden="true"></a>
                    <img src={product.image} alt={product.title} aria-hidden="true"/>
                    <p>{product.title}</p> 
                </div>
            </div>
            )
        );
        return(
             <div>{productItems}</div>
        );
    };
};