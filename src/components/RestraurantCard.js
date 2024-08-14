const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestraurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="flex flex-column">
        <img
          alt-src="res-logo"
          className="w-full h-48 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines[0]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestraurantCard;
