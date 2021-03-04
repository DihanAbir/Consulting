import React from "react";

const ReviewSlider = ({ filtereditems }) => {
  const { type, id, title, icon, description } = filtereditems;
  return (
    <div className=" p-3 row">
      <div className="work-section col-lg-6 p-3 border">
        <div className="image">
          <img className=" sliderImge img-fluid" src={icon} alt={icon} />
        </div>
      </div>

      <div className="col-lg-6 details">
        <p>{title}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default ReviewSlider;
