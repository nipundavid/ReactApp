import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Button Cliked");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickHandler()}> Click </button>{" "}
      </div>
    );
  }
}

export default ClassClick;
