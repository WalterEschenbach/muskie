import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <ul className="filterUl">
        <li>
          <button onClick={() => this.props.renderFish("Reel")}>Reels</button>
        </li>
        <li>
          <button onClick={() => this.props.renderFish("Rod")}>Rods</button>
        </li>
        <li>
          <button onClick={() => this.props.renderFish("Lure")}>Lures</button>
        </li>
        <li>
          <button onClick={() => this.props.renderFish("Gear")}>Gear</button>
        </li>
      </ul>
    );
  }
}

export default Filter;
