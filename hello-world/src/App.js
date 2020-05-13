import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Greet from "./Components/Greet";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
