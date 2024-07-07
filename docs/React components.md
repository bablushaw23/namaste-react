Everything In the react is a component. Be it a input box, button, check box etc.
There Are two type of component:
1. Functional Component (uses JS Function to create component. Its being used these days)
2. Class Component (uses JS Class to create component. Old way, no one use anymore)
### Functional component:
A function which returns JSX or React Element, is functional component.
```JSX
const Heading=()=>{
	return <h1>Namaste React from component</h1>;
};

root.render(<Heading/>)
```
* Fn.Component must be returned from a function and only 1 component can be returned. If you want to return more, use div to wrap and return the div
* Notice, in the above code to render fn.comp you have to pass comp.name in JSX way
* Component name must start with capital letter
* How To reuse a component? check code below
```JS
const Title=()=>{
	<h1>Namaste React from component</h1>
}

const HeadComp=()=>{
	<div id="container">
		<Title/>
		<h2>Head under H1</h2>
	</div>
}
```
* You can also write `<Title></Title>`  instead of `<Title/>`
* Component composition: is having 2 or more component inside 1
* In below code, notice `title` is not a function but a variable and **so it is not a component**
```JSX
const title={
	<h2>Head under H1</h2>
}
```

### Writing JS code between JSX code with {}:
To access Some variable or write some condition or run some loop or call some function in between somewhere in jsx you can do all these. For that you can write JS code inside {}
```JSX
let i=100;
const HeadingComponent=()=>{
	<div>
		<h2>{i*2}</h2>
	</div>
}
```
Example of nested component and element:
```jsx
const elem=<span>React Element</span>

const title={
	<h1>{elem}</h1>
}

const HeadComp=()=>{
	<div id="container">
		{title}
	</div>
}

const final=()=>{
	<div><HeadComp/></div>
}

root.render(<final/>)
```

### React Props
We want to use react-components to create more than 1 result with different inputs. Same like we want to use same function different time with different arguments.
**Arguments for react components are called `props`.**
Example:
```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestraurantCard
          resName="Dominos"
          cuisine="Pizza, Burger"
          rating="4.5 Stars"
        />
        <RestraurantCard
          resName="Haldiram"
          cuisine="Sweets, Indian, Dessarts"
          rating="4.7 stars"
        />
      </div>
    </div>
  );

const RestraurantCard = (props) => {
  console.log(props);
  return (
    <div >
	    <h3>{props.resName}</h3>
	</div>
	)}
```
#### Some Points:
1. when you pass arguments like `resName`, `cuisine`, these are merged into 1 object (in example it is props). That object will contains data in key-value form
