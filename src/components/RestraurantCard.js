const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestraurantCard = (props) => {
  console.log(props);
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt-src="res-logo"
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 Stars</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

export default RestraurantCard;
