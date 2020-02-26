import React from "react";

export default class cart extends Component {
  render() {
    return (
      <div class="ui list">
        <div class="item">
          <img
            class="ui avatar image"
            src="/images/avatar2/small/lindsay.png"
          />
          <div class="content">
            <a class="header">Lindsay</a>
            <div class="description">
              Last seen watching{" "}
              <a>
                <b>Bob's Burgers</b>
              </a>{" "}
              10 hours ago.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
