
#### Adding run cmd in script:
Instead of running `npx parcel index.html` we have 1 way to alias it.
You want to add `script` section in `package.json`. In that section you can save And allies long executable command into short name.
```js
  "scripts": {
    "test": "jest",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```
Now you can run `npm run start` to do the same thing as `npx parcel index.html`.
and `npm run build` to do the same as `npx parcel build index.html`.
* A point to note: you can run `npm start` to do the same as `npm run start` as start being a reserved keyword in npm which simply do `run start`.

### React.createElement
The method `React.createElement("elem_type",{attr_key1: "value1"}, "child react elements object")`.
Example: 
```js
const heading = React.createElement("h1",{id:"head1"},"Namaste React");
const heading2 = React.createElement("h1",{id:"head1"}, React.createElement("h2",{id:"head2"},"Heading"));
```

* `React.createElement(..)` actually creates react Objects and when we render these objects to DOM then it creates HTML elements
* How we render? We render using `ReactDOM`. we use ReactDOM as seperate package because we're dealing with browser.
	```js
	const root = ReactDOM.createRoot(document.getElementById("root"));
	root.render(heading2);
```
* What render method does? It creates the DOM element of input argument and replace existing DOM element in root

You Can notice in the upper examples how tricky it is to create an element like H1 or H2 compare it with how we used to create H1 or H2 tags in Html. And think of the second example where you want to create one element inside other that is nested elements. 
When you write listed tabs in a Html vs when you write nested element inside react.
React way: `const heading2 = React.createElement("h1",{id:"head1"}, React.createElement("h2",{id:"head2"},"Heading"));`
Html way: `<h1 id="head1"> <h2 id="head2">Heading</h2> </h1>`

React way of Creating element is more cumbersome and clumsy. So react developers felt the pain of other developers and Developed another independent project called JSX.
### JSX
React without JSX way: `const heading = React.createElement("h1",{id:"head1"},"Namaste React");`
React with JSX Way: `const heading = <h1>Namaste React using JSX</h1>` 
We can write JSX code Inside and between react code.
JSX end goal to interpret into React.createElement object.
Note that:
* JSX is not part of react
* JSX is not HTML or xml, but attempted to look alike it so to be developer friendly
* JSX is not HTML, so there are some changes, like HTML's class is `className` here

But JSX is not a JS syntax, and if you simply run it then JS compiler will throw error. Then must be some transcriber which converting JSX into JS code. 
It is done by:
#### Babel
Before compiling the project, parcel gives it to Babel so it can convert JSX to React.createElement.

Not only this, Babel also can convert modern JS versioned language (like ES6) into older plane vanilla JS. This is sometime required to make sure it is supported in older browsers.

### JSX (continues...)

If you want to write JSX in single line then it is fine, but to write in multiple line you want to wrap it with braces().

```js
const headline=(<h1 className="head">
			   Namaste React
			   </h1>
			   );
```
### Config-driven UI
Controlling the UI using config data that comes from backend like, color code, font size etc will be provided by backend API. Requirement maybe like, In IPL to support a particular city you draw the homepage with its team flag etc