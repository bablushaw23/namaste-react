import React from "react";
import ReactDOM from "react-dom";

// Create element in virtual DOM
        const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading);