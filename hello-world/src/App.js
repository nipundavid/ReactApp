import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Greet from "./Components/Greet";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Message></Message>
      </div>
    );
  }
}

export default App;
