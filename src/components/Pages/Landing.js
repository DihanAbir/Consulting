import React from "react";
import Banner from "../Navbar/Banner/Banner";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Works from "../Works/Works";

function Landing(props) {
  return (
    <div>
      <Banner />
      <Services />
      <Works />
      <Review />
    </div>
  );
}

export default Landing;
