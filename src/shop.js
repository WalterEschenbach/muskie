import React from 'react';

export class Shop extends React.Component {


componentWillMount(){
    fetch("/src/products.json");

}

    render() {
        return(
            <div className="shopContainer">
                
                <div>SHOP


                </div>
                
            </div>
        )
    }
}