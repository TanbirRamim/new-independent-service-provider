import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <About></About>
      <Services></Services>

      <Blogs></Blogs>
    </div>
  );
};

export default Home;
