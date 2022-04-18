import React from "react";
import Tanbir from "../../Images/Tanbir.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          className="  rounded-circle"
          style={{ height: "400px", width: "400px" }}
          src={Tanbir}
          alt=""
          srcset=""
        />
        <h1>Tanbir Hossain Ramim</h1>
      </div>
      <h5 className="bg-dark text-white">
        Hello, Everyone. I'm a junior front end developer, trying to become a
        full stack one. My goal is to do something very significant within 2022.
        The developing journey I started in 31 December, 2021.. I want to make
        this decision very special. My mentor is Jhankar Mahbub, His works
        inspire me all the time. I have done some projects related to my
        environment. Anyone with a github account can access my works, except
        some confidential projects. Do pray for me, I will make you proud one
        day!{" "}
      </h5>
    </div>
  );
};

export default About;
