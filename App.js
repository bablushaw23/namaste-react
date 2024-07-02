import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",{id:"head1"},"Namaste React");
const heading2 = React.createElement("h1",{id:"heading"}, React.createElement("h2",{id:"head2"},"Heading"));

const jsxHead=<h1 id="heading">Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHead);