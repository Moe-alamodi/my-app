import React from "react";
import "./Layout.css";
import Login from "./Login";

const Layout = () => {
  return (
    <div className="welcome">
      <h1>Wellcome Pizzafy</h1>
      <p> Start by login to your profile</p>
      <Login />
    </div>
  );
};

export default Layout;
