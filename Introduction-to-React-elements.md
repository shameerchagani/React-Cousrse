# Introduction to React Element

In this Chapter we gonna look at, what are React Elements, how do we create Elements <br> in React and how React create Elements under the hood.

Elements are the smallest building blocks of React apps. An element describes what<br> should be there in our user interface. An Element is a plain object describing what we<br> want to appear in terms of the DOM nodes.

Creating a React Element is Cheaper compared to creating a DOM element directly.<br>  An Element can be created by using JSX or directly using React without JSX. Lets see how to create<br> an Element using JSX, to learn more about JSX open <b style="color:orange">Introduction to JSX file.</b> for more detailed<br> explaination.
<br>
<br>

### Creating React Element using JSX Syntax.

```js
const reactElementUsingJSX = <h1>Hello, world!</h1>;
```

### Now let's look at creating React Element without JSX syntax.

```js
const reactElementWithoutJSX = React.createElement("h1", null, "Hello, world!");
```

Creating an element in JSX looks pretty simple, self-explanatory, and straightforward. But let's look at<br>
React.createElement and all the parameters / arguments it takes.
- First parameter, if you look at it is <b style="color:#34cceb">"h1"</b>. This first parameter is a type of element that you want to create for example it's <b style="color:#34cceb">"h1"</b> in this particular example, but you can pass stuff like <b style="color:#34cceb">"div"</b> <b style="color:#34cceb">"img"</b> etc.<br>
- Second parameter is <b style="color:#34cceb">"null"</b> in this example but that's not always the case. This second<br> parameter is an object full of properties / attributes that you have provided to that<br> eleemnt. for example className, tabIndex etc.
 let's look at example.

  ### Using JSX
  ```js
  const reactElementUsingJSX = <h1 className="greet">Hello, world!</h1>;
  ```
  ### Without using JSX
  ```js
  const reactElementWithoutJSX = React.createElement(
    "h1", 
    {
      className: "greet",
      ...
    }, 
    "Hello, world!"
  );
  ```
- The third parameter is anything that you want to pass to the innerHTML element you created. it can<br> be any JavaScript valid expression, string etc.

<br>

### Note:

Using react without JSX is something which is not recommand, but is good to understand how it works<br> under the hood. React uses babel under the hood to transpile or compile our JSX code to regular JavaScript.<br>

To discover more checkout babel here. [https://babeljs.io/repl]()







