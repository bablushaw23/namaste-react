import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestraurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt-src="res-logo"
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s"
      />
      <h3>Pizzaria</h3>
      <h4>Hand-roast pizzas, Chinese</h4>
      <h4>4.3 Stars</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
        <RestraurantCard />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
