import React, { Component } from "react";

class AddUserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addUser(event, this.state.username);

    this.setState({
      username: ""
    });
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="is-size-6 field">
        <form onSubmit={this.handleSubmit} className="container">
          <input
            className="input is-small has-text-centered is-rounded is-size-6"
            placeholder="enter in user name"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button> Add </button>
        </form>
      </div>
    );
  }
}

export default AddUserForm;
