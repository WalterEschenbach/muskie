import React from 'react';
import './products.css';

export default class Products extends React.Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div className="product-container" key={product.id}>
            <div className="thumbnail">
                {/* <a href={`#${product.type}`} onClick={this.props.handleAddToCart}></a> */}
                <img src={product.image} alt={product.title} />
                {/* <p>{product.title}</p> */}
            </div>
            </div>
            )
        );
        return(
            <div>hello{productItems}</div>
        );
    };
};