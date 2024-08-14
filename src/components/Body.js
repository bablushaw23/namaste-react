import RestraurantCard from "./RestraurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { GET_RESTRAURANT_LIST } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    console.log("is offline now");
    return <h1>Looks like you're offline. Check your connection.</h1>;
  }

  // I dont want to render body before api response is ready. So till then I will show loading
  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
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
