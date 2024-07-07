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
