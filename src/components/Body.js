import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { GET_RESTRAURANT_LIST } from "../../utils/constant";
import { Link } from "react-router-dom";

const Body = (props) => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTRAURANT_LIST);
    const json = await data.json();

    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // ? for optional chaining to make null safe
    setRestList(restaurants);
    // react doesnot update the state immediately but it does in batches for performance
    setFilteredRest(restaurants);
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
            const filtered = filteredRest.filter(
              (each) => each.info.avgRating > 4
            );
            // Here, when restList is updated, the whole Body component is re-rendered with filtered value only.
            setFilteredRest(filtered);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restaurant) => (
          <Link
            to={"/restraurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestraurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
