const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestraurantCard = (props) => {
  console.log(props);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt-src="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines[0]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestraurantCard;
