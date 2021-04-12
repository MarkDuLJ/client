import React, { Component } from "react";
import axios from "axios";
class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      team: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4000/players",
        this.state
        // {
        //   firstName,
        //   lastName,
        //   team,
        //   email,
        // }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer}>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                type="text"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                type="text"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="team"
                value={this.state.team}
                onChange={this.handleInputChange}
                type="text"
              />
              <label htmlFor="team">Team</label>
            </div>
            <div className="input-field col s6">
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                type="text"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button
            name="action"
            className="btn waves-effect waves-light"
            type="submit"
            onClick={this.handleSubmit}
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
