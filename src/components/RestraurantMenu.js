import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTRAURANT_DETAILS_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";

const RestraurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiUrl = RESTRAURANT_DETAILS_URL + resId;
    const json = await fetch(apiUrl);
    const data = await json.json();
    setRestInfo(data);
    console.log(data);
  };

  if (restInfo === null) {
    return <Shimmer />;
  }

  // extracting info out of data

  const restName = restInfo?.data?.cards[0]?.card?.card?.text;
  const { cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const nameAndPriceCard =
    restInfo?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[4]?.card
      ?.card?.itemCards;

  return (
    <div>
      <h1>{restName}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {nameAndPriceCard.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestraurantMenu;
