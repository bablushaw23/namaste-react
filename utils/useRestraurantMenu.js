import { useState, useEffect } from "react";
import { RESTRAURANT_DETAILS_URL } from "./constant";
const useRestraurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
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

  return restInfo;
};

export default useRestraurantMenu;
