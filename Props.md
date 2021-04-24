# Introduction to Props in React.

## What are Props?
Properties or Props in React, you can think of them as function arguments<br> in JavaScript or attributes in HTML elements. They are basically inputs to a component<br> which inturn makes the component to behave differently according to the data get<br> passed in.

### Example:

```js
functional components.

function SayHello(props) {
  return (
    <div>
      { props.name }
    </div>
  )
}

Class component

import React from 'react'

class SayHello extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
```

## How do we pass Props to a components.
To pass Props to a component, it's basically like passing attributes to a HTML<br> element.

### Example: 
```js
ReactDOM.render(
  <SayHello name="Charles" />,
  document.getElementById("root")
);

OR

function Greet() {
  return (
    <SayHello name="Charles" />
  )
}
```
## Note
So here, "name" is the attribute we pass to the SayHello component as  props in this<br> case, note that you can also pass objects, functions, arrays etc, it's not restricted to<br> only string or numbers.

<br>

## Props are Read-Only
What does that basically mean?
It mean once props are defined you can't change<br> them directly within the component they are passed to. in otherwords, Props are<br> strictly used for inputs to a component whether it's a class or functional component.<br> Props Cannot be changed inside of a component! We say, it's Immutable. in simple<br> term something that connot be change directly.<br>

Example

```js
function SayHello(props) {
  props.name = "Charles";
  return (
    <div>
      { props.name }
    </div>
  )
}
```

## Typechecking With PropTypes

In development is always good to setup error checks or some sort of way to let you<br> known wheather you working with or passing right information to your application or<br> other functions that works with some information within your application while<br> developing or working on a project.
This is where propsTypes comes in to play.<br> PropTypes is a typechecking library for React application which give you ability to<br> check wheather your passing right propTypes and props itself.

Example:

Take the <b>SayHello</b> function for example, the function requires a props called name but<br> if we forget to pass the name props to it, it's just not going to display anything but<br> and no error wil be displayed. But say we really need the name info but forgot to<br> include it. until this point we don't have away to let us known, hey you forgot to pass a<br> name props to the <b>SayHello</b> function. it will be cool if we could if it can tell us that.<br>

Let's see how to do that.

```js
import PropTyes from 'prop-tyes'

function SayHello(props) {
  return (
    <div>
      { props.name }
    </div>
  )
}

SayHello.propTyes = {
  name: PropTyes.string.isRequired
}
```

Now we mark the name properity as required and it should be a string.<br>
So if we forget to pass the name properity or pass a wrong datatype next time we are<br> using this component it's gonna yell at us, either we pass a wrong type or not pass it<br> at all.
