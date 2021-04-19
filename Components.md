# Introduction to Components in React.

In this topic, we will understand what React Components are, how to create components and how<br> to render them.

### What are React Components?<br>
React Components are the building blocks of any React application. Components allow us to<br> split our UI into independent and resuable UI pieces.<br>

A typical React application will have many Components like header, navbar, main<br> content and a footer component. Conceptually a component is either a JavaScript class or<br> function which are refer to either stateful or stateless, also known as logic or presentational<br> components that accepts inputs which are called properties or by convention known as props<br> and returns a React element that describes how a section of the User Interface should appear.<br>

## Creating a Component

Class base component definition.

```js
Stateless Class component Example
------------------------------------
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <h1>Hello world!</h1>
    )
  }
}
```

Function base component definition.
```js
Stateless functional component Example
---------------------------------------
ES5 - ES2015

function App() {
  return (
    <h1>Hello world!</h1>
  )
}

ES6 - ES2016 ->

const App = () => <h1>Hello world!</h1>;

OR

const App = () => {
  return (
    <h1>Hello world!</h1>
  )
}
```

```js
Stateful Class components
--------------------------
    
class SayHello extends React.Component {
  constructor() {
    super(props);
    this.state = {
      name: "Charles",
    };
  }

  render() {
    return (
      <h1>Hello, {this.state.name}</h1>
    )
  }
}
```
```js
Stateful Functional component using Hooks Example

function SayHello() {
  const [name, setName] = React.useState("Charles");

  return (
     <h1>Hello, { name }</h1>
  )
};
``` 