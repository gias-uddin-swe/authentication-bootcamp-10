import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="payment">payment</Link>
    </div>
  );
};

export default Home;
