import React, { Component } from "react";

export default class counter extends Component {
  state = {
    digit: 0,
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState((pervState) => ({
        digit: pervState.digit + 1,
      }));
    }, 1000);
  };

  render() {
    return (
      <div>
        <h2>counter: {this.state.digit}</h2>
      </div>
    );
  }
}
