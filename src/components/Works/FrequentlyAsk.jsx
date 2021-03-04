import React from "react";
import CustomForm from "../../utils/CustomForm";
import SectionHeader from "../../utils/SectionHeader";
import { title, topic } from "../../utils/Widgets";

const FrequentlyAsk = () => {
  return (
    <div className="row">
      <div className="p-5 border text-center">
        <div className="">
          <SectionHeader
            styleTitle={title}
            styleTopic={topic}
            topic="Fill the Form"
            title="Let's make a call or get a quatation"
          />
          <CustomForm/>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
