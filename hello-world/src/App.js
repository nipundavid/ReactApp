import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Greet from "./Components/Greet";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet name="Batman" movieName="Batman Begins">
          <p>Some Text</p>
        </Greet>
        <Greet name="Superman" movieName="Man of Steel">
          <button>Action</button>
        </Greet>

        <Welcome name="Batman" movieName="Batman Begins">
          {" "}
        </Welcome>
        <Welcome name="Superman" movieName="Man of Steel">
          {" "}
        </Welcome>
      </div>
    );
  }
}

export default App;
