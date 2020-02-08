import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Store..."
            id="fname"
            onChange={this.props.onChangeSearchHandler}
          />
          <i className="search icon" />
        </div>
        <div className="results"></div>
      </div>
    );
  }
}
