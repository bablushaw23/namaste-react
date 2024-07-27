React Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and provide a way to add state and other React features to function components without writing a class component.
## React hook provides multiple functions
1. useState():
2. useEffect();
### 1. useState():
This method will create a state variable and returns back the variable and setter method for it. Whenever you change the state variable through setter, react will immediately update the DOM in UI. So,
**Whenever the state variable value is updated, react immediately re-renders the component where the state variable belongs**

```js
import { useState } from "react";

const [varName, setter]=useState(initializingValue)

setter(12345)  // will update the state value and update the DOM
```
1. Here `varName` is the name of state variable you give and setter is the name of setter function of the state variable `varName`.
2. `initializingValue` is the initial value you provide, whatever from boolean to json object.
3. you should not do `varName=123`, this will make no use of state for which actually you made this variable. **You always use setter to change the value of the state varaible.** So the `varName` you want to use as Read-only.

Full-example:
```js
import RestraurantCard from "./RestraurantCard";
import { useState } from "react";

const Body = (props) => {
  // when this component is rendered for the first time, the button was not clicked
  // and so restList was not filtered and hence we see 2 cards.
  let { restData } = props;
  const [restList, setRestList] = useState(restData);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restData.filter((each) => each.rating > 4);
            // Here, when restList is updated, the whole Body component
            // is re-rendered with filtered value only.
            setRestList(filtered);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {restList.map((restaurant) => (
          <RestraurantCard key={restaurant.key} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

```
## How React does this:
### Reconciliation Algorithm
#### React Fiber is the new algo to do Reconciliation
It is updated algo used by React since React 16. It has efficient diff-checker between objects and efficient DOM manipulation technique


## 2. useEffect():
This is called by React when 1st time rendering is completed. Best use when you want to render with loading screen and then with `useEffect()` you call the API behind the scena
* Note, you want to use this method in a function which returns a component to render. Now, if the component needs to do network call, like to load some image etc. That's not react's concern but Html's so useEffect() will be called before loading image. To change the behavior you want to wait until the network call is done.
useEffect(): has 2 arguments:
1. The first argument is a callback function that represents the effect. This function will be executed after every render by default, and it can optionally return a cleanup function to clean up any side effects.

2. The second argument is an optional dependency array. This array should include all values (props, state variables, or any other values) that the effect depends on. If any of these values change between renders, the effect will be re-executed.

If the dependency array is empty ([]), the effect will run only once after the initial render and will not run again on subsequent renders, regardless of any state or prop changes.

If array itself not provided then for every render it will be executed. Now, consider a common case where in useEffect you're calling a function component to render and again, the component load will trigger useEffect again. **This is Recursion** Careful of this trap

* Syntax:
```js
useEffect(()->{
	console.log("Will be called after component renders")
}, [])
```
* Note, 
```js
import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";

const Body = (props) => {
  let { restData } = props;
  const [restList, setRestList] = useState(restData);

  useEffect(() =>{
    console.log("Effect called last, after return, after render");
  },[])

  console.log("Will be called first");

  return (
    <div className="body"></div>
```

more example you can check in git commit: `useEffect()`


### What not to do
1. Never declare a state variable (useState) outside of a functional component. Otherwise you will get TypeError. It is meant to create as local variable inside a function. Adviced to declare all useState at the beginning at function.
2. Dont declare useState inside if-else or any loop. This makes the code inconsistent and we dont know how it behaves
