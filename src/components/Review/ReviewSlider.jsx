import React from "react";

const ReviewSlider = ({ filtereditems }) => {
  const { type, id, title, icon, description } = filtereditems;
  return (
    <div className=" p-3 row">
      <div className="work-section col-lg-6 p-3 border">
        <div className="image">
          <img
            style={{ objectFit: "cover", width: "20rem", height: "15rem" }}
            className=" sliderImge img-thumbnail"
            src={icon}
            alt={icon}
          />
        </div>
      </div>

      <div className="text-center col-lg-6 details">
        <div className="border p-3">
          <h5>{title}</h5>
          <p>{type}</p>
          <hr />
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
