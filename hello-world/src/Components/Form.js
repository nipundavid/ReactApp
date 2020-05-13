import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "Batman",
    };
  }
  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.username);
    console.log(this.state.topic);
    console.log(this.state.comments);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="Batman">Batman</option>
            <option value="Superman">Superman</option>
            <option value="Flash">Flash</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
