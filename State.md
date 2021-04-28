# Instruction to State in React.

## What is State?
The state is an instance of React Component can be defined as an object of a set<br> of observable properties that control the behavior of the component. In other words<br>, the State of a component is an object that holds some information that may change<br> over the lifetime of the component. in addition a State of a component is internal<br> configuration of the component to hold some data or information for that specific<br> component.

Example.

```js
import React from 'react';

class Counter extends React.Component {
  constructor(props) {

    //this is the state of the component
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>{this.count}</h1>
      </div>
    )
  }
}
```

## Difference between state and props.

props are short for <b>properties</b>, think about it like HTML attribute of an element in HTML<br> and state is a plain JavaScript objects with key value pairs. both <b>props</b> and <b>state</b> hold<br> information that influences the output of render or the return of a component, they are<br> different in one important way though. props get passed to the component similar to<br> function parameters whereas state is managed within the component similar to<br> variables declared within a function.

## Three things you shouldn't do with state.

1. Do Not Modify State Directly.<br>
let take the example above where in out state we have count which is equal to<br> zero. Example
```js
    // Inside the render method or any function

   //Avoid or wrong
  this.state.count = 9;


  //Corrected way.
  this.setState({count: this.state.connt = 9})
  ```
2. Updates May Be Asynchronous.<br>
...coming soon.
  




