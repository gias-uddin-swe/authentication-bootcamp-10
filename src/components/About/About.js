import React from "react";
import "./About.css";
import useAuth from "./../../Hook/useAuth";

const About = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>THis is About {user.email}</h1>
    </div>
  );
};

export default About;
