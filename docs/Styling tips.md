### Inline style (Not recommended, instead have .css file)
```js
const styleCard ={
    backgroundColor: "#f0f0f0",
};

const RestraurantCard=()=>{
    return(
        <div className="res-card" style={styleCard}>
            <h3>Rest-name</h3>
        </div>
    )
}

```