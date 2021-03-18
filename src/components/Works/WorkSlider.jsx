import React from "react";

const WorkSlider = ({ filtereditems }) => {
  const { type, id, title, icon, description } = filtereditems;
  return (
    <div className=" p-3 s-container ">
      <div className="work-section p-3 border">
        <div className="image">
          <img
            style={{ width: "20rem", height: "20rem" }}
            className="image sliderImge img-fluid"
            src={icon}
            alt={icon}
          />
        </div>
      </div>

      <div className="details overlay">
        <div className="text row">
          <div className="col-lg-3">
            <button className="primary-btn">+</button>
          </div>
          <div className="col-8">
            <p>{title}</p>
            <p>{type}</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
