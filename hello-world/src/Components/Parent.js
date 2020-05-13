import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert("Hello " + this.state.parentName + " from " + childName);
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}></Child>
      </div>
    );
  }
}

export default Parent;
