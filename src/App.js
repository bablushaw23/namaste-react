import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body restData={restData} />
    </div>
  );
};

const restData = [
  {
    resName: "Dominos",
    cuisine: "Pizza, Burger",
    rating: "4.5 Stars",
  },
  {
    resName: "Haldiram",
    cuisine: "Sweets, Indian, Desserts",
    rating: "4.7 stars",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
