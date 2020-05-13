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
        <Greet name="Batman" movieName="Batman Begins"></Greet>
        <Welcome name="Superman" movieName="Man of Steel"></Welcome>
      </div>
    );
  }
}

export default App;
