import React from "react";

const BannerLeft = () => {
  return (
    <div style={{ width: "200%" }}>
      <div className="row my-4">
        <div className="col-lg-6 ">
          <p style={{ color: "#fff" }}>Expert Consulting Agency</p>
          <h1 style={{ color: "#fff", fontSize: "4rem", fontWeight: "bolder" }}>
            We Make Your Business Better
          </h1>
          <button className="primary-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
