import RestraurantCard from "./RestraurantCard";

const Body = (props) => {
  const { restData } = props;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restData.map((restaurant) => (
          <RestraurantCard {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
