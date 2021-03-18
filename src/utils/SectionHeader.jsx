import React from "react";
import "./css.css";

const SectionHeader = ({
  title,
  topic,
  col = 4,
  styleTopic = "",
  styleTitle = "",
}) => {
  return (
    <div className="container">
      <div className=" row text-center justify-content-lg-center">
        <div className="col-lg-${col} p-2 border">
          <p style={styleTopic} className="topic">
            {topic}
          </p>

          <h4 style={styleTitle}> {title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
