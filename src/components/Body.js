import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = (props) => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // ? for optional chaining to make null safe
    setRestList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(restList);
    setFilteredRest(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // if I try to update filterRest from restList as it was updated before, it wont work.
    // This bcz, react doesnot update the state immediately but it does in batches for performance
  };

  // I dont want to render body before api response is ready. So till then I will show loading
  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() =>
              setFilteredRest(
                restList.filter((each) =>
                  each.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restList.filter((each) => each.info.avgRating > 4);
            // Here, when restList is updated, the whole Body component is re-rendered with filtered value only.
            setRestList(filtered);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restaurant) => (
          <RestraurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
