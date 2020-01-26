import React from 'react';
import Products from './products';
import './products.css';
import './App.css';

let log = console.log;

log(5);
export class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products:[], filteredProducts:[]};
    }

    componentDidMount(){
    fetch("http://localhost:8000/products/")
    //convert the results to json below
    .then(response => response.json())
    .then(data => this.setState({
        products: data,
        filteredProducts: data
    }));
    };

    render() {
        return(
            <div className="shopContainer">
                <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </div>
        )
    }
}