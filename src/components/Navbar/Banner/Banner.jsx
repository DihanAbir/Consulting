import React from "react";
import Navbar from "../Navbar";
import BannerLeft from "./BannerLeft";
import dConsulting from "../../../assets/d-consulting.png";

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#24244D" }} className="container-fluid">
      <div className="container"></div>
      <Navbar />
      <div
        className="div container"
        style={{ display: "flex", color: "white" }}
      >
        <div className="row">
          <div className="col-lg-5">
            <BannerLeft />
          </div>
          <div className="col-lg-7">
            <div className="imgIfram" style={{ width: "100%" }}>
              <img style={{ width: "100%" }} src={dConsulting} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
