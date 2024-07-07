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

