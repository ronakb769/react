import React from "react";
import ReactDOM from "react-dom/client";
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <User name="John" expertise="Forntend Developer"/>
    <User name="Mark" expertise="Backend Developer"/>
    <User name="Sara" expertise="DevOps Engineer"/>
  </>
);
