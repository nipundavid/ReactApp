import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, movieName } = this.props;
    return (
      <h1>
        Welcome {this.props.name}, movie name {this.props.movieName}{" "}
      </h1>
    );
  }
}

export default Welcome;
