import React from "react";
import "./css.css";


const SectionHeader = ({ title, topic, col = 4 ,styleTopic = "", styleTitle = "" }) => {

  
  return (
    <div className="container">
      <div className=" row text-center justify-content-lg-center">
        <div className="col-lg-${col} border">

              <p style={styleTopic} className="topic">
                {topic}
              </p>

          <h4 style={styleTitle}> {title}</h4>
          <i className="bi bi-app-indicator"></i>

        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
