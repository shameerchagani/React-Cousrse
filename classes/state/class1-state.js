import React from 'react';

/*
  This is what we will call presentational component
  because it only cares about presenting information no 
  logic.
*/
class ShowUserInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>User info</h1>
        <h2>Full Name: {this.props.user.first} {this.props.user.last}</h2>
        <h2>Age: {this.props.user.age}</h2>
        <h2>Job: {this.props.user.job}</h2>
      </div>
    )
  }
}


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        age: 21,
        first: "Charles",
        last: "Elloit",
        job: "software developer"
      },
      showUserInfo: false
    }
  }

  handleClick = () => {
    this.setState({showUserInfo: !this.state.showUserInfo})
  }

  render() {
    return (
      <div className="counter">
        <div>
          {this.state.showUserInfo ? <ShowUserInfo user={this.state.user} /> : 'Click The button to see the user info.'}
          <br />
          <button onClick={this.handleClick}>{this.state.showUserInfo ? "Hide" : "Show"}</button>
        </div>
      </div>
    )
  }
}

export default User;