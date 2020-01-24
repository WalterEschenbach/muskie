import React from 'react';
import './SideDrawer.css';
import './BurgerButton.css';


//function that contains the JSX elements for the mobile side drawer. An instance of this function is rendered in the return statement of the MobileSideDrawer class below.
const SideDrawer = props => (
        <nav className="sideDrawerNav">
            <ul>
                <a href='#'><li>Reels</li></a>
                <a href='#'><li>Rods</li></a>
                <a href='#'><li>Lures</li></a>
                <a href='#'><li>Tackle</li></a>
                <a href='#'><li>Gear</li></a>
            </ul>
        </nav>
);



export class MobileSideDrawer extends React.Component {

    render() {
        return(
            <SideDrawer />
        )
    }
}

export default MobileSideDrawer;