import React from 'react';

let log = console.log;


fetch("http://localhost:8000/products/")
    .then(response => response.text())
    .then(body => log(body));




export class Shop extends React.Component {

    render() {
        return(
            <div className="shopContainer">
                <div><h6>SHOP</h6></div>
            </div>
        )
    }
}