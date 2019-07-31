import React from "react";
import "../style/Homepage.scss";

const Homepage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return <div className="homepage">Hello, {user.nickname}</div>;
};

export default Homepage;
