```js
import ReactDOM from "react-dom";
import React, { Component } from "react";

class ChangeDetection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeCount:0
    }; 
    setInterval(this.getEmployeesCount, 5000);        
  }

  componentWillUnmount(){
    clearInterval()
  }
  getEmployeesCount=()=>{
    alert('Fetching the Employee Count from the REST API');
    fetch("call to API")
      .then(res => res.json())
      .then(
        (result) => {          
          this.setState({
            employeeCount: result.length
          });
        }
      );
  }

  componentDidMount(){
    this.getEmployeesCount();
  }

  showReports=()=>{
    ReactDOM.render(<Reports></Reports>,document.getElementById("root"));
  }
  render() {
    return (
      <div>
        <h2>Welcome to Component Lifecycle Methods Demonstration...</h2>
        <p>
          <label>Number of Employees are : <b>{this.state.employeeCount}</b></label>
        </p>
        <button onClick={this.showReports}>Show Reports</button>
        </div>
      );
    }
}
```