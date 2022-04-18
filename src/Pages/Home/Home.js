import React from "react";
import ExtraSection from "../ExtraSection/ExtraSection";

import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import banner from "./banner.jpg";

const Home = () => {
  return (
    <div>
      <img src={banner} style={{ width: "100%" }} alt="" srcset="" />

      <Services></Services>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
