import React, { Component } from "react";
import "./App.css";
import "./App.scss";
import axios from "axios";
import UserCard from "./components/UserCard";
import AddUserForm from "./components/UserCardForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "kdleonard93",
      usersList: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      console.log(this.state.usersList);
      this.fetchUsers();
    }
  }

  fetchUsers = (user = `${this.state.username}`) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response);
        this.setState({
          usersList: [...this.state.usersList, response.data]
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  addUser = (event, user) => {
    const newUser = user;
    this.setState({
      username: newUser
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="has-text-weight-bold has-text-black">
          {" "}
          GitHub User Cards{" "}
        </h1>
        <AddUserForm addUser={this.addUser} />
        <div className="users">
          {this.state.usersList.map((item, index) => {
            return (
              <div className="card" key={index}>
                <UserCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
