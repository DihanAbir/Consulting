import React from "react";
import Carousel from "react-elastic-carousel";

import "./style.css";
import { WorkData } from "../../Data/WorkData";
import SectionHeader from "../../utils/SectionHeader";
import { title, topic } from "../../utils/Widgets";
import ReviewSlider from "./ReviewSlider";

function Review() {
  return (
    <div className="container-fluid reviewContainer">
      <div className="container p-4">
      <SectionHeader
        styleTitle={title}
        styleTopic={topic}
        topic="Case Study"
        title="Our Recent Work"
      />
      <div>
        <Carousel itemsToShow={2} enableAutoPlay={true} autoPlaySpeed={3000}>
          {WorkData.map((filtereditems) => (
            <ReviewSlider filtereditems={filtereditems} />
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  );
}

export default Review;
