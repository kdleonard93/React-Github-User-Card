import React, { Component } from "react";

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      detail: []
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.detail.avatar_url} />
        <div>
          <h1> {this.props.detail.login} </h1>
          <h2> Followers: {this.props.detail.followers} </h2>
        </div>
      </div>
    );
  }
}

export default UserCard;
