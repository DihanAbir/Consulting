import React from "react";


const WorkSlider = ({ filtereditems }) => {
  const { type, id, title, icon, description } = filtereditems;
  return (
    <div className=" p-3 ">
      <div className="work-section p-3 border">
        <div className="image">
          <img className=" sliderImge img-fluid" src={icon} alt={icon} />
        </div>
      </div>

      <div className="details">
          <div className="row">
              <div className="col-8">
                  <p>{title}</p>
                  <p>{type}</p>
              </div>

              <div className="col-lg-3">
                  <button>+</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default WorkSlider;
