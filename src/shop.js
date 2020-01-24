import React from 'react';

let log = console.log;


fetch("http://localhost:8000/products/")
    .then(response => response.text())
    .then(body => log(body));



// const shopSetup = () => {
// let shopContainer = document.createElement('UL');
//     for(let i=0; i < 10 ; i++) {
//         log(i);
//         shopContainer.appendChild('<li className="hello"></li>');
//     };
// }


// shopSetup();


export class Shop extends React.Component {

    
    render() {
        return(
            //<shopSetup />
            <div className="shopContainer"></div>
        )
    }
}