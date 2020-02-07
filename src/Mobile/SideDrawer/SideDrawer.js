import React from "react";
import "./SideDrawer.css";
import "./BurgerButton.css";

//function that contains the JSX elements for the mobile side drawer. An instance of this function is rendered in the return statement of the MobileSideDrawer class below.
const SideDrawer = props => (
  <nav className="sideDrawerNav">
    <ul>
      <button>
        <li>Reels</li>
      </button>
      <button>
        <li>Rods</li>
      </button>
      <button>
        <li>Lures</li>
      </button>
      <button>
        <li>Tackle</li>
      </button>
      <button>
        <li>Gear</li>
      </button>
    </ul>
  </nav>
);

export class MobileSideDrawer extends React.Component {
  render() {
    return <SideDrawer />;
  }
}

export default MobileSideDrawer;
