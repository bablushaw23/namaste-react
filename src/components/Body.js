import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";

const Body = (props) => {
  let { restData } = props;
  const [restList, setRestList] = useState(restData);

  useEffect(() => {
    console.log("Effect called");
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  console.log("Will be called first");

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restData.filter((each) => each.rating > 4);
            // Here, when restList is updated, the whole Body component is re-rendered with filtered value only.
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
