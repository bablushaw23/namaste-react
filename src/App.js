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
    key: 1,
    resName: "Dominos",
    cuisine: "Pizza, Burger",
    rating: 3.5,
  },
  {
    key: 2,
    resName: "Haldiram",
    cuisine: "Sweets, Indian, Desserts",
    rating: 4.7,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
