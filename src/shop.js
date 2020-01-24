import React from 'react';

let log = console.log;

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8000/products');
// xhr.onload = () => {
//     const products = JSON.parse(xhr.responseText);
//     log(products[0]);
// };
// xhr.send();

fetch("http://localhost:8000/products/")
    .then(response => response.text())
    .then(body => log(body));




export class Shop extends React.Component {





    render() {
        return(
            <div className="shopContainer">
                
                <div>SHOP

                </div>
                
            </div>
        )
    }
}