import React, { useState } from "react";
import SectionHeader from "../../utils/SectionHeader";
import { WorkData } from "../../Data/WorkData";
import { title, topic } from "../../utils/Widgets";
import WorkSlider from "./WorkSlider";
import Carousel from "react-elastic-carousel";
import "./style.css";
import FrequentlyAsk from "./FrequentlyAsk";
import FAQ from "./FAQ";

const Works = () => {
  const [filter, setFilter] = useState("Sales Services");
  console.log(filter);
  const FilteredItems = WorkData.filter((item) => item.type === filter);
  console.log(FilteredItems);

  const buttons = [
    "Business & Finanace",
    "Custome Support",
    "Sales Services",
    "Business Strategy",
    "Finanace Support ",
  ];

  return (
    <div className="container">
      <SectionHeader
        styleTitle={title}
        styleTopic={topic}
        topic="Case Study"
        title="Our Recent Work"
      />

      <div className="flex text-center my-4">
        {buttons.map((button) => (
          <button className="btn btn-light" onClick={() => setFilter(button)}>
            {button}
          </button>
        ))}
      </div>

      <div className="">
        <Carousel itemsToShow={3} enableAutoPlay={true} autoPlaySpeed={3000}>
          {FilteredItems.map((filtereditems) => (
            <WorkSlider filtereditems={filtereditems} />
          ))}
        </Carousel>
      </div>

        <div className="row py-5 my-5">
        <div className="col-lg-6"><FrequentlyAsk/></div>
        <div className="col-lg-6"><FAQ/></div>
        </div>

    </div>
  );
};

export default Works;
