import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "heading1" }, "Heading1");
const heading2 = React.createElement("h1", { id: "heading2" }, "Heading2");
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
