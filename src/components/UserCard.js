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
      <div className="card">
        <img src={this.props.detail.avatar_url} />
        <div className=" card-content">
          <h1 className="title is-12"> {this.props.detail.login} </h1>
          <h2 className="subtitle is-6">
            {" "}
            Followers: {this.props.detail.followers}{" "}
          </h2>
        </div>
      </div>
    );
  }
}

export default UserCard;
