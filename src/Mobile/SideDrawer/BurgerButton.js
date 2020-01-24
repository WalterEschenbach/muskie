import React from 'react';
import './BurgerButton.css';
import './SideDrawer.css';



class BurgerButton extends React.Component {
     constructor(props){
         super(props);
         this.handleClick = this.handleClick.bind(this);
     };

    handleClick() {
        const d = document.querySelector('.sideDrawerNav');
        const l = document.querySelectorAll('.sideDrawerNav li')
        const b = document.querySelector('.burgerButton')
        d.classList.toggle('SD');
        b.classList.toggle('tLine');
        l.forEach((link, index) => {
            link.style.animation = `SDfade 1.2s ease forwards ${index/7}s`;
        })
    };



    render() {
        return(
            <div className="burgerButtonContainer">
               {/* An event listener attribute’s value should be a function. */}
                <button className="burgerButton" onClick={this.handleClick}>
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </button>
            </div>
        );
    };
};

export default BurgerButton;