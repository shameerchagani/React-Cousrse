import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className="counter">
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Counter;