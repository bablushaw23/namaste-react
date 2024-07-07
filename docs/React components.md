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
2. While adding components through a loop or map,  To uniquely identify every component we should pass a key as prop like `<RestraurantCard key="123" resName="Haldiram"/>`. It helps React to identify which item has changed, added or removed so it can work to re-render only that part. But if key is not provided then React will have to re-render all available items again which is a less-optimized way.
3. But again, dont use loop index as a key for component bcz index can change for a particular element every time you run the code. Moreover, lets say a new item added in between than index will be changed but you already set it as a key to some element. This will bring issue into React to the same issue and re-render all items. Use index as key as last option
4. You want to keep every major Component into separate folder and then `export` the component and import from another to use. Ex: `export default MyComponent`
5. Best practice, dont keep raw data into Component file.
6. 2 ways to export: 1. default export 2. named export. Import way changes in both ways. Check in commit "export-import"
7. You can export both ways in same file. Example to import:
```javascript
import HeaderComponent, { LOGO_URL } from "./exportExample";
```
