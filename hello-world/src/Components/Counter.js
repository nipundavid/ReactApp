import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementOnce() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback " + this.state.count);
      }
    );
  }

  incrementFive() {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  }

  increment() {
    this.incrementOnce();
  }
  increment_() {
    this.incrementFive();
    this.incrementFive();
    this.incrementFive();
    this.incrementFive();
    this.incrementFive();
  }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment One</button>
        <button onClick={() => this.increment_()}>Increment Five</button>
      </div>
    );
  }
}

export default Counter;
